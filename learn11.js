// JavaScript While
var ask = confirm("Do you want to repeat ?")
var counter = 0;

while (ask) {
    ask = confirm("Repeat ?")
    counter++;
}

document.write("You repeat as much " + counter + " time");