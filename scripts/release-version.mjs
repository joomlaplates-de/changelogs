import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {parseMarkdown} from './generate.mjs';
const root=resolve(import.meta.dirname,'..');
const [selection,version]=process.argv.slice(2);
if(!selection||!/^\d+\.\d+(?:\.\d+)*$/.test(version??''))throw new Error('Usage: npm run release-version -- templates|PRODUCT_ID VERSION');
const file=resolve(root,'products.json'),products=JSON.parse(await readFile(file,'utf8'));
const selected=products.filter(p=>selection==='templates'?p.type==='template':p.id===selection);
if(!selected.length)throw new Error('Unknown product: '+selection);
for(const p of selected){
 const releases=parseMarkdown(await readFile(resolve(root,p.history),'utf8'),p.history);
 if(p.override)releases.push(...parseMarkdown(await readFile(resolve(root,p.override),'utf8'),p.override));
 if(!releases.some(r=>r.version===version))throw new Error(`${p.id}: Add release ${version} to Markdown first.`);
 p.version=version;
}
await writeFile(file,JSON.stringify(products,null,2)+'\n');
console.log(`Updated ${selected.length} product version(s) to ${version}. Run npm test and npm run build before committing.`);
