#!/usr/bin/env node
// Copies content.json into index.html's baked-data block, so the page still
// reads when it is opened straight off the disk. Run it after editing content.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOCK = /(<script type="application\/json" id="baked-data">)[\s\S]*?(<\/script>)/;

const content = await readFile(join(ROOT, 'content.json'), 'utf8');
JSON.parse(content); // fail loudly on malformed content rather than baking it in

const page = join(ROOT, 'index.html');
const html = await readFile(page, 'utf8');
if (!BLOCK.test(html)) throw new Error('no baked-data block in index.html');
await writeFile(page, html.replace(BLOCK, `$1\n${content.trim()}\n$2`));
console.log('baked content.json into index.html');
