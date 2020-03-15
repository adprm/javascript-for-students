// JavaScript While Nested
var ask = confirm("Apakan anda ingin mengulang ?");
var counter = 0;

while (ask) {
    counter++;
    var star = "*".repeat(counter) + "<br>";
    document.write(counter + ":" + star);
    ask = confirm("Ulangi ?");
}