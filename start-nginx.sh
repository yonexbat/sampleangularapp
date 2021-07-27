#!/usr/bin/env bash
echo 'starting nginx our own way!'
sed -i "s|BASEPATH|$PathBase|" index.html
nginx -g 'daemon off;'