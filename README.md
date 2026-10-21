# desalpage

**desalpage** is a governance substrate for recursive multi-agent work:
agents delegating down a reporting structure, one bounded sprint at a
time — budgets reserved before delegation, deferrals instead of silence.

The name is the Alpine transhumance term for the planned descent of the
herds when the high-pasture season ends: a bounded season, and an ending
that is deliberate, complete, and never silent.

## Repository layout

| Path | Purpose |
| --- | --- |
| [`site/`](site/) | Starlight site — landing page, blog, RSS. Deployed on push to `main`. |
| [`papers/`](papers/) | Preprints and artifact bundles. |
| [`packages/`](packages/) | Released code artifacts, extracted from the prototype with provenance. |

## How this repository is maintained

desalpage is developed as a private prototype; **this repository is the
public release surface**. Code artifacts arrive here by one-way extraction,
recorded in [`packages/PROVENANCE.json`](packages/PROVENANCE.json), and
are never hand-edited. Publications are authored here; this repo is their
source of truth.

## Working on the site

```bash
pnpm install
pnpm --filter @desalpage/site dev
```

## License

Apache-2.0 — see [LICENSE](LICENSE), copyright The desalpage Authors.