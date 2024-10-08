#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="${PWD}/node_modules/.bin/protoc-gen-ts_proto";

# Directory to write generated code to (.js and .d.ts files)
IN_DIR="./services";
OUT_DIR="./build";
PROTO_FILES="$(ls ./services)";

rm -rf $OUT_DIR;
mkdir $OUT_DIR;

protoc \
    --plugin=$PROTOC_GEN_TS_PATH \
    --proto_path=$IN_DIR \
    --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out=$OUT_DIR \
    $PROTO_FILES



echo "Build was successful";
