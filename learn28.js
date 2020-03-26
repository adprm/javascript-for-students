// JavaScript Array Method Filter
// example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter or get odd data numbers with filter methods
const filterDataNumbers = numbers.filter((dataNumbers => {
    return dataNumbers % 2 === 1
}));

// display filtered data
document.write(filterDataNumbers + "<br>");

// example 2
const studentsName = ['Adit', 'Bayu', 'Citra', 'Dimas', 'Della', 'Elisa'];

// filter or get data with a total of 5 characters
const filterStudentsName = studentsName.filter((dataStudentsName => {
    return dataStudentsName.length === 5;
}));

// display filtered data
document.write(filterStudentsName);