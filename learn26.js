// JavaScript Delete Data Array with Method Splice
var flowersName = ['Melati', 'Mawar', 'Anggrek', 'Raflesia'];
document.write("Data array sebelum dihapus " + flowersName + "<br>");

// delete data array with method splice
flowersName.splice(2, 1); //  2 merupakan index array, 1 merupakan jumlah data yang dihapus
document.write("Data array setelah dihapus " + flowersName);