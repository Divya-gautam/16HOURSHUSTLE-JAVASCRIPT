// Using a Third variable
var a=10;
var b=2;
var c=a ; 
a=b;
b=c;
console.log(a);
console.log(b);

// Without Using A third variable

var a=3;
var b=6;
a=a+b;
b = a - b;
a= a - b ;
console.log(a);
console.log(b);

