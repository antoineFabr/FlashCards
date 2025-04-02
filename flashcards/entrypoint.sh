#!/bin/sh
set -e
node ace migration:run --force

exec npm run dev
