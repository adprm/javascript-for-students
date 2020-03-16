// JavaScript Array Method Filter
// contoh 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// memfilter atau mendapatkan bilangan data ganjil dengan method filter
const filterDataNumbers = numbers.filter((dataNumbers => {
    return dataNumbers % 2 === 1
}));

// menampilkan data yang telah difilter
document.write(filterDataNumbers + "<br>");

// contoh 2
const studentsName = ['Adit', 'Bayu', 'Citra', 'Dimas', 'Della', 'Elisa'];

// memfilter atau mendapatkan data dengan jumlah 5 karakter
const filterStudentsName = studentsName.filter((dataStudentsName => {
    return dataStudentsName.length === 5;
}));

// menampilkan data yang telah difilter
document.write(filterStudentsName);