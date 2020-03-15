// JavaScript While
var ask = confirm("Apakah anda ingin mengulang ?")
var counter = 0;

while (ask) {
    ask = confirm("Mengulang ?")
    counter++;
}

document.write("Anda mengulang sebanyak " + counter + " kali");