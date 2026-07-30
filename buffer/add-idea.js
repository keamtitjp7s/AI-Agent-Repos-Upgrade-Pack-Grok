#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BUFFER_DIR = path.join(__dirname, 'ideas');

function addIdea({ title, body = '', source = 'manual' }) {
  if (!fs.existsSync(BUFFER_DIR)) fs.mkdirSync(BUFFER_DIR, { recursive: true });
  const id = Date.now().toString();
  const idea = {
    id,
    title,
    body,
    source,
    collectedAt: new Date().toISOString(),
    status: 'buffered'
  };
  const file = path.join(BUFFER_DIR, `${id}.json`);
  fs.writeFileSync(file, JSON.stringify(idea, null, 2));
  console.log(`[buffer] Added ${file}`);
  return idea;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const title = args[args.indexOf('--title') + 1] || 'Untitled';
  const body = args[args.indexOf('--body') + 1] || '';
  const source = args[args.indexOf('--source') + 1] || 'cli';
  addIdea({ title, body, source });
}

module.exports = { addIdea };
