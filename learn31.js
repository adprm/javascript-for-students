// JavaScript Function Writing
// 1. cara biasa
function nameFunction() {
    console.log("Hello world");
}

// 2. fungsi dengan ekpresi
var nameFunction = function () {
    console.log("Hello world");
}

// 3. fungsi dengan arrow => function
var nameFunction = () => {
    console.log("Hello world");
}
// cara kedua dengan arrow function, jika hanya menggunakan 1 statement
var nameFunction = () => console.log("Hello world")

// 4. fungsi konstruktor
var nameFunction = new Function('console.log("Hello world");');