#!/bin/sh

set -xe

# remove old version
rm -rf build

# build backend
./gradlew build -x browserTest

# copy over new version
rm -rf ../Parkview/node_modules/parkview
mv build/js/packages/parkview ../Parkview/node_modules
