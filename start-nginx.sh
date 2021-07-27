#!/usr/bin/env bash
echo 'starting nginx our own way!'
sed -i "s|BASEPATH|$PathBase|" index.html
mkdir -p $PathBase
cp ./* ./$PathBase
nginx -g 'daemon off;'