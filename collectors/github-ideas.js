#!/usr/bin/env node
/**
 * Collector: zbiera pomysły z GitHub issues/PRs/automatyzacji
 * Użycie: node collectors/github-ideas.js --query "is:issue label:idea"
 */
const fs = require('fs');
const path = require('path');

const BUFFER_DIR = path.join(__dirname, '..', 'buffer', 'ideas');

async function collectIdeas(query = 'is:issue is:open label:enhancement') {
  // Placeholder – w realnym użyciu wołaj GitHub API / connected tools
  console.log(`[collect] Query: ${query}`);
  const idea = {
    id: Date.now().toString(),
    title: 'Sample idea from automation',
    body: 'Automatycznie wypluty pomysł z GitHub',
    source: query,
    collectedAt: new Date().toISOString(),
    status: 'buffered'
  };

  if (!fs.existsSync(BUFFER_DIR)) fs.mkdirSync(BUFFER_DIR, { recursive: true });
  const file = path.join(BUFFER_DIR, `${idea.id}.json`);
  fs.writeFileSync(file, JSON.stringify(idea, null, 2));
  console.log(`[collect] Saved → ${file}`);
  return idea;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const qIdx = args.indexOf('--query');
  const query = qIdx >= 0 ? args[qIdx + 1] : undefined;
  collectIdeas(query).catch(console.error);
}

module.exports = { collectIdeas };
