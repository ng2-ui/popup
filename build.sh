#!/usr/bin/env bash
set -e

node_modules/rimraf/bin.js dist
node_modules/ng2-inline-template/bin/ng2inline "src/**/*.ts"
cp src/*.css dist
node_modules/typescript/bin/tsc --rootDir dist
