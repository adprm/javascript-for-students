// JavaScript While Nested
var ask = confirm("Do you want to repeat ?");
var counter = 0;

while (ask) {
    counter++;
    var star = "*".repeat(counter) + "<br>";
    document.write(counter + ":" + star);
    ask = confirm("Repeat ?");
}