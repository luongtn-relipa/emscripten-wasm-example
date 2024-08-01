const createModule = require("./test_1.js");

const runWasm = async () => {
  const Module = await createModule();
  console.log(Module);
  const add = Module.cwrap("add", "number", ["number", "number"]);
  const isPrime = Module.cwrap("isPrime", "number", ["number"]);

  const sum = add(3, 4);
  const prime = isPrime(sum);

  console.log(`Sum: ${sum}`);
  console.log(`Prime: ${prime ? "true" : "false"}`);
};

runWasm();

// emcc test_1.c -o test_1.js -s EXPORTED_FUNCTIONS="['_add', '_isPrime', '_main']" -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s MODULARIZE=1 -s EXPORT_NAME="createModule"
