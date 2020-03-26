// JavaScript Function Writing
// 1. normal way
function nameFunction() {
    console.log("Hello world");
}

// 2. function by expression
var nameFunction = function () {
    console.log("Hello world");
}

// 3. function with arrow => function
var nameFunction = () => {
    console.log("Hello world");
}
// the second way with the arrow function, if only using 1 statement
var nameFunction = () => console.log("Hello world")

// 4. constructor function
var nameFunction = new Function('console.log("Hello world");');