const process = require("process");

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);

let var1 = process.argv[2];

let var2 = process.argv[3];

console.log(var1+ var2);
