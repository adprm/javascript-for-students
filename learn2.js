// JavaScript Operator
var a = 10;
var b = 2;
var c = 0;

// operator aritmatika
console.log("Operator Aritmatika");
c = a + b;
console.log(`${a} + ${b} = ${c}`);
c = a - b;
console.log(`${a} - ${b} = ${c}`);
c = a * b;
console.log(`${a} * ${b} = ${c}`);
c = a ** b;
console.log(`${a} ** ${b} = ${c}`);
c = a / b;
console.log(`${a} / ${b} = ${c}`);
c = a % b;
console.log(`${a} % ${b} = ${c}`);

// operator penugasan
var score = 20;
console.log("Operator penugasan");
console.log("Nilai awal score : " + score);
score += 5;
console.log("score += 5 = " + score);
score -= 3;
console.log("score -= 3 = " + score);
score *= 2;
console.log("score *= 2 = " + score);
score /= 2;
console.log("score /= 2 = " + score);
score **= 3;
console.log("score **= 3 = " + score);
score %= 3;
console.log("score %= 3 = " + score);

// operator perbandingan
var a = 2;
var b = 5;
var typeDataString = "2";
console.log("Operator perbandingan")
var c = a == b;
console.log(`${a} == ${b} = ${c}`);
var c = a > b;
console.log(`${a} > ${b} = ${c}`);
var c = a >= b;
console.log(`${a} >= ${b} = ${c}`);
var c = a < b;
console.log(`${a} < ${b} = ${c}`);
var c = a <= b;
console.log(`${a} <= ${b} = ${c}`);
var c = a != b;
console.log(`${a} != ${b} = ${c}`);
var c = a === typeDataString;
console.log(`${a} === ${typeDataString} = ${c}`);

// operator logika
var me = 20;
var you = 19;
var itsTrue = me > you;
var itsFalse = me < you;

console.log("Operator logika");
var resutl = itsTrue && itsFalse;
console.log(`${itsTrue} && ${itsFalse} = ${resutl}`);
var resutl = itsTrue || itsFalse;
console.log(`${itsTrue} || ${itsFalse} = ${resutl}`);
var resutl = !itsTrue;
console.log(`!${itsTrue} = ${resutl}`);

// operator bitwise
var x = 4;
var y = 3;
console.log("Operator bitwise")
// bitwaise and
var resutl = x & y;
console.log(`${x} & ${y} = ${resutl}`);
// bitwise or
var resutl = x | y;
console.log(`${x} | ${y} = ${resutl}`);
// operator xor
var resutl = x ^ y;
console.log(`${x} ^ ${y} = ${resutl}`);
// operator negasi
var resutl = ~x;
console.log(`~${x} = ${resutl}`);
// right shift
var resutl = x >> y;
console.log(`${x} >> ${y} = ${resutl}`);
// left shift
var resutl = x << y;
console.log(`${x} << ${y} = ${resutl}`);
// right shift unsigned
var resutl = x >>> y;
console.log(`${x} >>> ${y} = ${resutl}`);