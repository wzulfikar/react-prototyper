#!/usr/bin/env sh

# usage: ./deploy.sh <domain>
# example: ./deploy.sh pay.iium.online

if [ -z $1 ]; then
	echo "deploy.sh - deploy the app to surge.sh"
	echo "usage: deploy.sh <domain>"
	echo "example: deploy.sh pay.iium.online"
	exit
fi

echo "- copying dist/index.html to dist/200.html for client-side routing"
cp dist/index.html dist/200.html

CNAME=$1
echo "- creating CNAME file for surge. CNAME: (${CNAME})"
echo $CNAME > dist/CNAME

echo "- deploying.."
surge dist