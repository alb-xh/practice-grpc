#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="${PWD}/node_modules/.bin/protoc-gen-ts";

# Directory to write generated code to (.js and .d.ts files)
IN_DIR="./services";
OUT_DIR="./build";
PROTO_FILES="$(ls ./services)";

rm -rf $OUT_DIR;
mkdir $OUT_DIR;

protoc \
    --plugin="protoc-gen-ts=$PROTOC_GEN_TS_PATH" \
    --proto_path=$IN_DIR \
    --js_out="import_style=commonjs,binary:$OUT_DIR" \
    --ts_out=$OUT_DIR \
    $PROTO_FILES

echo "Build was successful";

