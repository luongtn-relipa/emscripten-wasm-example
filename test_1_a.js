const Module = require("./test_1.js");

Module.onRuntimeInitialized = () => {
  // Use cwrap to get JavaScript functions for the exported C functions
  console.log(Module);
  const add = Module.cwrap("add", "number", ["number", "number"]);
  const isPrime = Module.cwrap("isPrime", "number", ["number"]);

  // Call the functions
  const sum = add(3, "abc");
  const prime = isPrime(sum);

  // Display the results
  console.log(`Sum: ${sum}`);
  console.log(`Prime: ${prime ? "true" : "false"}`);

  // Using ccall
  const sum2 = Module.ccall("add", "number", ["number", "number"], [3, 4]);
  console.log(`Sum using ccall: ${sum2}`);
  const prime2 = Module.ccall("isPrime", "number", ["number"], [sum2]);
  console.log(`Prime using ccall: ${prime2 ? "true" : "false"}`);
};

// emcc test_1.c -o test_1.js -s EXPORTED_FUNCTIONS="['_add', '_isPrime', '_main']" -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
