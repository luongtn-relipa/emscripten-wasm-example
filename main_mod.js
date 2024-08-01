const createModule = require("./main.js");

createModule().then((Module) => {
  console.log(Module);
  const sum = Module.add(3, 4);
  console.log(`Sum: ${sum}`);

  const prime = Module.isPrime(sum);
  console.log(`Prime: ${prime ? "true" : "false"}`);
});

// emcc main.cpp -o main.js -lembind -s MODULARIZE=1 -s EXPORT_NAME="createModule"
