h1. Rust WebASM -> javascript testing

Ants simulation planned, let's see what gets implemented in the end.

Uses rust to handle all logic, two.js to render with primitive vector graphics. Currently contains marching squares implementation (no interpolation, only straight lines), sample noise used for initialization.

h1. Instructions

clone the repo

# Install npm dependencies

npm install

# Build rust to webasm, not sure if requires additional installations.

# This repository is based on https://rustwasm.github.io/docs/wasm-pack/prerequisites/index.html

make build

# Run webpack

make run

-> browser to localhost:8080
