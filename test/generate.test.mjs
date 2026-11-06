import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,mkdir,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {parseMarkdown,makeXml,build} from '../scripts/generate.mjs';

test('strict input rejects ambiguous headings, empty categories, duplicates and invalid dates',()=>{
  for(const text of ['## 2.5\n- x','## [2.5]\n### Bad\n- x','## [2.5]\n### Fixed','## [2.5] - 2026-02-30\n### Fixed\n- x','## [2.5]\n### Fixed\n- x\n## [2.5]\n### Fixed\n- y']) assert.throws(()=>parseMarkdown(text,'product.md'),/product.md/);
});
test('multiline notes and version sorting survive parsing',()=>{
 const r=parseMarkdown('# Test\n## [2.9]\n### Fixed\n- Menü & <tag>\n  second line\n## [2.10]\n### Notes\n- Current');
 assert.equal(r[0].version,'2.10');assert.equal(r[1].changes.Fixed[0],'Menü & <tag>\nsecond line');
 const xml=makeXml({element:'uikit4',type:'plugin',group:'system'},r);
 assert.match(xml,/<folder>system<\/folder>/);assert.match(xml,/<!\[CDATA\[Menü &amp; &lt;tag&gt;<br \/>second line\]\]>/);
});
test('missing current version and escaping history paths fail before output',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'jp-changelog-test-'));
 await writeFile(join(dir,'history.md'),'# X\n## [2.5]\n### Notes\n- old\n');
 const p={id:'x',name:'X',element:'mod_x',type:'module',version:'2.6',history:'history.md'};
 await writeFile(join(dir,'products.json'),JSON.stringify([p]));
 await assert.rejects(build(dir),/Missing current version/);
 p.history='../outside.md';await writeFile(join(dir,'products.json'),JSON.stringify([p]));
 await assert.rejects(build(dir),/outside repository/);
});
test('all imported products, exceptions and current versions generate',async()=>{
 const root=resolve(import.meta.dirname,'..'); const catalog=await build(root);
 assert.equal(catalog.products.length,96);assert.equal(catalog.views.length,32);
 const templates=catalog.views.find(v=>v.id==='templates');assert.equal(templates.products.length,65);
 assert.match(catalog.views.find(v=>v.id==='templates_tp_top').releases[0].changes.Changed.join(' '),/does not contain/);
 for(const p of catalog.products) {
  const xml=await readFile(join(root,'generated',p.changelog),'utf8');
  assert.ok(xml.includes(`<version>${p.version}</version>`),p.id);
 }
 assert.equal(catalog.products.find(p=>p.id==='plg_system_uikit4').version,'4.0.17');
 assert.ok(!catalog.views.find(v=>v.id==='plg_system_uikit4').releases.some(r=>r.version==='3.25.26'));
});
