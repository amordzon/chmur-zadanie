#!/bin/sh

mongoimport --db test --collection workers --type json --file /staff.json --jsonArray
