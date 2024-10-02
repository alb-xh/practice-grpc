#!/usr/bin/env bash

if [ "$(uname)" == "Darwin" ]; then
  sudo brew install protobuf;
  protoc --version;
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
  sudo apt install -y protobuf-compiler
  protoc --version
else
  echo "OS is not supported!";
  exit 1;
fi
