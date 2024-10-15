#!/usr/bin/env bash

sudo apt install -y protobuf-compiler
protoc --version

cd /usr/local/bin
sudo wget https://github.com/grpc/grpc-web/releases/download/1.5.0/protoc-gen-grpc-web-1.5.0-linux-x86_64
sudo mv protoc-gen-grpc-web-1.5.0-linux-x86_64 protoc-gen-grpc-web
sudo chmod +x protoc-gen-grpc-web
protoc-gen-grpc-web --version

echo "Successful installation"
