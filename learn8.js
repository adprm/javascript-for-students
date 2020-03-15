// JavaScript If Nested
var username = prompt("Masukkan username anda : ");
var password = prompt("Masukkan password anda : ");

if ((username.toUpperCase() == "ADIT")) {
    if ((password.toUpperCase() == "TIDA")) {
        document.write("Anda berhasil login");
    } else {
        document.write("Input tidak valid");
    }
}