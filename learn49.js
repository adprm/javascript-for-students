// JavaScript Math Random
// the random math function generates random values ​​from 0.0 to 1.0
console.log(Math.random());
console.log(Math.random());

// make a random value from a certain range
// we can wrap it with functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRndInteger(1, 100));
console.log(getRndInteger(1, 5));

// absolute function
var x = Math.abs(-12);
var y = Math.abs(-100);

console.log(x);
console.log(y);