#!/usr/bin/env node
/**
 * Importuje źródłowe repozytorium (metadata + struktura) do buffer/refs/
 */
const fs = require('fs');
const path = require('path');

const REFS_DIR = path.join(__dirname, '..', 'buffer', 'refs');

function importRepo(owner, repo) {
  if (!fs.existsSync(REFS_DIR)) fs.mkdirSync(REFS_DIR, { recursive: true });
  const meta = {
    owner,
    repo,
    importedAt: new Date().toISOString(),
    note: 'Źródło referencyjne – pełny kod importowany przez GitHub tools / git clone'
  };
  const file = path.join(REFS_DIR, `${owner}__${repo}.json`);
  fs.writeFileSync(file, JSON.stringify(meta, null, 2));
  console.log(`[import] ${owner}/${repo} → ${file}`);
  return meta;
}

if (require.main === module) {
  const [owner, repo] = process.argv.slice(2);
  if (!owner || !repo) {
    console.error('Usage: node importers/import-repo.js <owner> <repo>');
    process.exit(1);
  }
  importRepo(owner, repo);
}

module.exports = { importRepo };
