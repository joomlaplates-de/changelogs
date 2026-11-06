import { readFile, mkdir, writeFile, readdir, unlink } from 'node:fs/promises';
import { resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

export const categories = ['Added', 'Changed', 'Fixed', 'Security', 'Removed', 'Language', 'Notes'];
const tags = { Added:'addition', Changed:'change', Fixed:'fix', Security:'security', Removed:'remove', Language:'language', Notes:'note' };
const versionPattern = /^\d+\.\d+(?:\.\d+)*$/;

export function compareVersions(a, b) {
  const aa = a.split('.').map(Number), bb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(aa.length, bb.length); i++) {
    const delta = (bb[i] ?? 0) - (aa[i] ?? 0);
    if (delta) return delta;
  }
  return b.localeCompare(a);
}

/** Deliberately small, documented Markdown dialect; ambiguous input fails closed. */
export function parseMarkdown(text, label = 'Markdown') {
  const releases = []; let release, category, lastItem;
  const fail = (line, message) => { throw new Error(`${label}:${line}: ${message}`); };
  const lines = text.replace(/^\uFEFF/, '').replaceAll('\r\n', '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    if (line.startsWith('# ') && !release) continue;
    const heading = line.match(/^## \[(\d+\.\d+(?:\.\d+)*)\](?: - (\d{4}-\d{2}-\d{2}))?$/);
    if (heading) {
      const [,version,date] = heading;
      if (date && (Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date)) fail(i+1,'Invalid date');
      if (releases.some(r => r.version === version)) fail(i+1,`Duplicate version ${version}`);
      release = { version, ...(date ? {date} : {}), changes:{} }; releases.push(release); category = undefined; lastItem = undefined;
      continue;
    }
    if (line.startsWith('### ')) {
      category = line.slice(4);
      if (!release || !categories.includes(category)) fail(i+1,'Unknown category or category without version');
      if (release.changes[category]) fail(i+1,`Duplicate category ${category}`);
      release.changes[category] = []; lastItem = undefined; continue;
    }
    if (line.startsWith('- ')) {
      if (!release || !category || !line.slice(2).trim()) fail(i+1,'Item requires version, category and text');
      release.changes[category].push(line.slice(2)); lastItem = release.changes[category].length-1; continue;
    }
    if (line.startsWith('  ') && lastItem !== undefined) {
      release.changes[category][lastItem] += '\n'+line.slice(2); continue;
    }
    fail(i+1,'Expected ## [version], ### category, or - item (continuations: two spaces)');
  }
  if (!releases.length) throw new Error(`${label}: No releases`);
  for (const r of releases) {
    if (!Object.keys(r.changes).length || Object.values(r.changes).some(items=>!items.length)) throw new Error(`${label}: Empty version/category ${r.version}`);
  }
  return releases.sort((a,b)=>compareVersions(a.version,b.version));
}

const xmlEscape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const cdata = s => `<![CDATA[${s.replaceAll(']]>',']]]]><![CDATA[>')}]]>`;
// Joomla renders items as HTML. Escape the content before CDATA, including literal HTML in historical notes.
export function makeXml(product, releases) {
  const logs = releases.map(r => {
    let text = `  <changelog>\n    <element>${xmlEscape(product.element)}</element>\n    <type>${product.type}</type>\n    <version>${r.version}</version>\n`;
    if (product.group) text += `    <folder>${xmlEscape(product.group)}</folder>\n`;
    for (const c of categories) {
      const items = r.changes[c]; if (!items?.length) continue;
      text += `    <${tags[c]}>\n`+items.map(item=>`      <item>${cdata(xmlEscape(item).replaceAll('\n','<br />'))}</item>\n`).join('')+`    </${tags[c]}>\n`;
    }
    return text+'  </changelog>';
  });
  return '<?xml version="1.0" encoding="utf-8"?>\n<changelogs>\n'+logs.join('\n')+'\n</changelogs>\n';
}

export async function build(root = resolve(dirname(fileURLToPath(import.meta.url)), '..')) {
  const products = JSON.parse(await readFile(resolve(root,'products.json'),'utf8'));
  if (!Array.isArray(products) || !products.length) throw new Error('products.json must be a nonempty array');
  const ids = new Set(), identities = new Set(), history = new Map();
  async function load(path, id) {
    const full = resolve(root,path), rel = relative(root,full);
    if (isAbsolute(rel) || rel.startsWith('..')) throw new Error(`${id}: History path outside repository`);
    if (!history.has(path)) history.set(path,parseMarkdown(await readFile(full,'utf8'),`${id} (${path})`));
    return structuredClone(history.get(path));
  }
  const output = [];
  for (const p of products) {
    if (!/^[a-z0-9_]+$/.test(p.id) || ids.has(p.id)) throw new Error(`Invalid/duplicate product id ${p.id}`);
    if (!/^[a-z0-9_]+$/.test(p.element) || !['template','module','plugin'].includes(p.type) || !versionPattern.test(p.version) || !p.name?.trim()) throw new Error(`${p.id}: Invalid product metadata`);
    if ((p.type==='plugin' && !/^[a-z0-9_]+$/.test(p.group??'')) || (p.type!=='plugin' && p.group)) throw new Error(`${p.id}: Invalid plugin group`);
    const identity = `${p.type}/${p.group??''}/${p.element}`;
    if (identities.has(identity)) throw new Error(`${p.id}: Duplicate extension identity`);
    identities.add(identity); ids.add(p.id);
    let releases = await load(p.history,p.id);
    if (p.override) {
      for (const override of await load(p.override,p.id)) {
        releases = releases.filter(r=>r.version!==override.version); releases.push(override);
      }
    }
    releases.sort((a,b)=>compareVersions(a.version,b.version));
    if (!releases.some(r=>r.version===p.version)) throw new Error(`${p.id}: Missing current version ${p.version}`);
    output.push({...p,releases});
  }
  // Parse everything before replacing any published output.
  const out = resolve(root,'generated'), xmlDir = resolve(out,'xml');
  await mkdir(xmlDir,{recursive:true});
  const views = new Map();
  for (const p of output) {
    await writeFile(resolve(xmlDir,`${p.id}.xml`),makeXml(p,p.releases));
    const viewId = p.type==='template' ? (p.override ? `templates_${p.id}` : 'templates') : p.id;
    if (!views.has(viewId)) views.set(viewId,{id:viewId,name:p.type==='template'?(p.override?`Templates — ${p.name} exception`:'All templates'):p.name,type:p.type,version:p.version,products:[],releases:p.releases});
    views.get(viewId).products.push(p.id);
  }
  const catalog = {schemaVersion:1,views:[...views.values()],products:output.map(({releases,...p})=>({...p,changelog:`xml/${p.id}.xml`}))};
  await writeFile(resolve(out,'catalog.json'),JSON.stringify(catalog,null,2)+'\n');
  for (const file of await readdir(xmlDir)) if (file.endsWith('.xml')&&!ids.has(file.slice(0,-4))) await unlink(resolve(xmlDir,file));
  return catalog;
}

if (process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  build().then(c=>console.log(`Generated ${c.products.length} XML files and ${c.views.length} display histories.`)).catch(e=>{console.error(e.message);process.exitCode=1;});
}
