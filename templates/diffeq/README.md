# Differential Equation Entry Templates

Use these files as the starting point for new archive entries.

Typical flow:

```powershell
npm run diffeq:scaffold -- --number 051 --section autonomous
npm run simulations:previews -- --entry 051
```

Then paste the generated metadata snippet into the matching section file under
`data/diffeq/sections/`.

Section files should use the helpers in `data/diffeq/helpers.ts` so shared
category, method, asset, and simulation defaults stay centralized.
