# ‽

<https://symbol.wtf> is a dumb website I made so it would be easier to copy
symbols I usually have to Google.

You're welcome to open a PR adding new symbols, take a look in `public/symbols.js` for
an idea of how to do that.

## Deployment

The website files live in `public/`. Put new website assets in that directory;
keep repository-only files outside it.

On Laravel Cloud, set the static serving directory to `public`. No build command
is needed. Do not serve the repository root. Enable edge-cache purging on
deployment so removed files do not remain available from the cache.
