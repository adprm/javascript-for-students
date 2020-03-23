// JavaScript Math Random
// fungsi math random mengahasilkan nilai acak dari 0.0 sampai 1.0
console.log(Math.random());
console.log(Math.random());

// membuat nilai acak dari range tertentu
// dapat kita bungkus dengan fungsi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRndInteger(1, 100));
console.log(getRndInteger(1, 5));

// fungsi mutlak
var x = Math.abs(-12);
var y = Math.abs(-100);

console.log(x);
console.log(y);