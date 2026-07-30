# AI Agent Repos Upgrade Pack - Grok

**Zbierasz wszystkie wyplute z automatyzacji GitHub pomysły → importujesz źródłowe repozytoria → używasz buffora → tworzysz nowe repo's → finalizujesz od podstaw pełne skrypty/aplikacje/programy.**

## Proces (bez pytań)

1. **Collect** – zbieraj pomysły z issues, PR, automatyzacji, labels, AI-generated content z GitHub.
2. **Import** – pobieraj/klonuj źródłowe repozytoria jako referencje.
3. **Buffer** – przechowuj, filtruj, łącz pomysły w `buffer/`.
4. **Create** – twórz nowe repozytoria przez GitHub API.
5. **Finalize** – pisz od zera kompletne, działające aplikacje/skrypty/programy.

## Struktura

```
.
├── AGENTS.md                 # Instrukcje dla agentów Grok/Claude/Cursor
├── collectors/               # Skrypty zbierające pomysły
├── buffer/                   # Bufor pomysłów (JSON/MD)
├── importers/                # Import źródłowych repo
├── generators/               # Generatory pełnych aplikacji
├── templates/                # Szablony nowych repo
└── examples/                 # Przykłady sfinalizowanych projektów
```

## Szybki start

```bash
# Zbieraj pomysły (przykład)
node collectors/github-ideas.js --query "label:idea is:open"

# Buforuj
node buffer/add-idea.js --title "Nowy agent" --source "repo/issue"

# Finalizuj (tworzy pełny kod od zera)
node generators/finalize.js --idea buffer/ideas/001.json --target new-repo-name
```

Repo: https://github.com/keamtitjp7s/AI-Agent-Repos-Upgrade-Pack-Grok
