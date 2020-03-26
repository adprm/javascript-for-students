// JavaScipt Operator
var a = 10;
var b = 2;
var c = 0;

// arithmetic operator
document.write("arithmetic operator");
c = a + b;
document.write(`${a} + ${b} = ${c}<br\>`);
c = a - b;
document.write(`${a} - ${b} = ${c}<br\>`);
c = a * b;
document.write(`${a} * ${b} = ${c}<br\>`);
c = a ** b;
document.write(`${a} ** ${b} = ${c}<br\>`);
c = a / b;
document.write(`${a} / ${b} = ${c}<br\>`);
c = a % b;
document.write(`${a} % ${b} = ${c}<br\>`);

// assignment operator
var score = 20;
document.write("assignment operator" + "<br>");
document.write("Initial value score : " + score + "<br>");
score += 5;
document.write("score += 5 = " + score + "<br>");
score -= 3;
document.write("score -= 3 = " + score + "<br>");
score *= 2;
document.write("score *= 2 = " + score + "<br>");
score /= 2;
document.write("score /= 2 = " + score + "<br>");
score **= 3;
document.write("score **= 3 = " + score + "<br>");
score %= 3;
document.write("score %= 3 = " + score + "<br>");

// comparison operator
var a = 2;
var b = 5;
var typeDataString = "2";
document.write("comparison operator")
var c = a == b;
document.write(`${a} == ${b} = ${c}<br\>`);
var c = a > b;
document.write(`${a} > ${b} = ${c}<br\>`);
var c = a >= b;
document.write(`${a} >= ${b} = ${c}<br\>`);
var c = a < b;
document.write(`${a} < ${b} = ${c}<br\>`);
var c = a <= b;
document.write(`${a} <= ${b} = ${c}<br\>`);
var c = a != b;
document.write(`${a} != ${b} = ${c}<br\>`);
var c = a === typeDataString;
document.write(`${a} === ${typeDataString} = ${c}<br\>`);

// logic operator
var me = 20;
var you = 19;
var itsTrue = me > you;
var itsFalse = me < you;

document.write("logic operator");
var resutl = itsTrue && itsFalse;
document.write(`${itsTrue} && ${itsFalse} = ${resutl}<br\>`);
var resutl = itsTrue || itsFalse;
document.write(`${itsTrue} || ${itsFalse} = ${resutl}<br\>`);
var resutl = !itsTrue;
document.write(`!${itsTrue} = ${resutl}<br\>`);

// bitwise operator
var x = 4;
var y = 3;
document.write("bitwise operator")
// bitwaise and
var resutl = x & y;
document.write(`${x} & ${y} = ${resutl}<br\>`);
// bitwise or
var resutl = x | y;
document.write(`${x} | ${y} = ${resutl}<br\>`);
// operator xor
var resutl = x ^ y;
document.write(`${x} ^ ${y} = ${resutl}<br\>`);
// operator negation
var resutl = ~x;
document.write(`~${x} = ${resutl}<br\>`);
// right shift
var resutl = x >> y;
document.write(`${x} >> ${y} = ${resutl}<br\>`);
// left shift
var resutl = x << y;
document.write(`${x} << ${y} = ${resutl}<br\>`);
// right shift unsigned
var resutl = x >>> y;
document.write(`${x} >>> ${y} = ${resutl}<br\>`);

// ternary operator
var ask = confirm("Are you 18 years old? ?");
var resutl = ask ? "welcome" : "you can't be here";
document.write("ternary operator<br>");
document.write(resutl);