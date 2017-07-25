//here is the small code to see the difference between value and reference

//value

var a = "First"
var b = "Second"

a = b
a = "Third"

console.log(a);
console.log(b);


//reference

var c = { number: "First" };
var d;

d = c;
c.number = "Second";

console.log(c);
console.log(d);
