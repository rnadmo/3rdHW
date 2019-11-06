const http = require('http');
const url = require('url');
const querystring = require('querystring');
const calc = require('./calc.js');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 
let query = querystring.parse(url.parse(req.url).query);

let A = parseInt(query.a);
let B = parseInt(query.b);
let op = query.operator;

if(url.parse(req.url).pathname != '/') {res.end('Page Not found!');}
else if(!A || !B || !op) {res.end('Invalid Query!');}

else{
    if(op == 'add') res.end(calc.add(A,B) + "");
    else if(op == 'sub') res.end(calc.subtract(A,B) + "");
    else if(op == 'mult') res.end(calc.mult(A,B) + "");
    else if(op == 'div') res.end(calc.div(A,B) + "");
}

});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});