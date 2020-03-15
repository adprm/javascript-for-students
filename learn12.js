// JavaScript Do While
var ask = confirm("Apakah anda ingin mengulang ?")
var counter = 0;

do {
    counter++;
    ask = confirm("Mengulang ?")
} while (ask)

document.write("Anda mengulang sebanyak " + counter + " kali")