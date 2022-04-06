#!/bin/sh

set -xe

# remove old version
rm -rf build dist

# build backend
./gradlew build -x browserTest

mkdir dist/

# Get parkview module
cp -r build/js/packages/parkview/ dist/
