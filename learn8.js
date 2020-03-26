// JavaScript If Nested
var username = prompt("Enter your username : ");
var password = prompt("Enter your password : ");

if ((username.toUpperCase() == "ADIT")) {
    if ((password.toUpperCase() == "TIDA")) {
        document.write("You have successfully logged in");
    } else {
        document.write("Invalid input");
    }
}