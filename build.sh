#!/bin/sh
set -eu

cd "$(dirname "$0")"
rm -rf public
mkdir public
cp index.html symbols.css symbols.js favicon.png summary.png public/
