const calc = require('./calc');
console.log('insert two numbers!');
var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);

console.log(x + '+' +  y + '=' + calc.add(x, y));
console.log(x + '-' +  y + '=' + calc.subtract(x, y));
console.log(x + '*' +  y + '=' + calc.mult(x, y));
console.log(x + '/' + y + '=' + calc.div(x, y));