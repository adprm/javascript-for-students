// JavaScript Do While
var ask = confirm("Do you want to repeat ?")
var counter = 0;

do {
    counter++;
    ask = confirm("Repeat ?")
} while (ask)

document.write("You repeat as much " + counter + " time")