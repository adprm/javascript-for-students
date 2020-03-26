// JavaScript If and Operator Logica
var username = prompt("Enter your username : ");
var password = prompt("Enter your password : ");

if ((username.toUpperCase() == "ADIT") && (password.toUpperCase() == "TIDA")) {
    document.write("You have successfully logged in")
} else {
    document.write("Invalid input. Login failed")
}