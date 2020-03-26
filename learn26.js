// JavaScript Delete Data Array with Method Splice
var flowersName = ['Jasmine', 'Rose', 'Orchid', 'Raflesia'];
document.write("Data array sebelum dihapus " + flowersName + "<br>");

// delete data array with method splice
flowersName.splice(2, 1); //  2 is an array index, 1 is the amount of data that is deleted
document.write("Array data after being deleted " + flowersName);