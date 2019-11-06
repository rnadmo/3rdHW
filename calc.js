const calc = {};
calc.add = function(x, y){
 return x+y;
};
calc.subtract = function(x, y){
 return x-y;
};
calc.mult = function(x,y){
 return x*y;
};
calc.div = function(x,y){
 return x/y;
};
module.exports = calc;