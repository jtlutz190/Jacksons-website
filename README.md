This repo is my personal website @ jlutz.me!

## Differential equations archive

Archive metadata lives under `data/diffeq/`, split by section so the 1,000-entry
project can grow without one giant source file. The legacy
`data/diffeqEntries.ts` path remains as a compatibility export for app imports.

Useful commands:

```powershell
npm run diffeq:scaffold -- --number 051 --section autonomous
npm run simulations:previews -- --range 026-050
npm run simulations:previews -- --section direct-integration-ivp
```

Templates for new section metadata and simulation scripts live in
`templates/diffeq/`.
