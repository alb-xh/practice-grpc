#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="${PWD}/protoc-gen-grpc-web-1.5.0-linux-x86_64";

# Directory to write generated code to (.js and .d.ts files)
IN_DIR="./services";
OUT_DIR="./build";
PROTO_FILES="$(ls ./services)";

rm -rf $OUT_DIR;
mkdir $OUT_DIR;

protoc -I=$IN_DIR $PROTO_FILES \
  --grpc-web_out=import_style=typescript,mode=grpcweb:$OUT_DIR

echo "Build was successful";