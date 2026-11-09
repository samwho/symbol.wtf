# ‽

<https://symbol.wtf> is a dumb website I made so it would be easier to copy
symbols I usually have to Google.

You're welcome to open a PR adding new symbols, take a look in `symbols.js` for
an idea of how to do that.

## Deployment

Run `sh build.sh` to copy the website files into `public/`. Only files explicitly
listed in `build.sh` are published; add new website assets to that list.

On Laravel Cloud, set the build command to `sh build.sh` and the static serving
directory to `public`. Do not serve the repository root. Enable edge-cache purging
on deployment so removed files do not remain available from the cache.
