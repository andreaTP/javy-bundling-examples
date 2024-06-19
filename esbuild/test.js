const { readFileSync } = require('node:fs');
const { WASI } = require('wasi');
const { join } = require('node:path');

const wasi = new WASI({
    version: 'preview1',
});

(async () => {
    const wasmBinary = readFileSync(join(__dirname, 'dist', 'out.wasm'));
    const wasm = await WebAssembly.compile(wasmBinary);
    const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

    wasi.start(instance);
})();
