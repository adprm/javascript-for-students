// JavaScript Object Class
function person(firstName, lastName) {
    // property
    this.firstName = firstName;
    this.lastName = lastName;

    // method
    this.fullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }

    this.showName = () => {
        document.write(this.fullName());
    }
};

// membuat variable untuk paramater objek
var person1 = new person("Aditiya", "Permana");
var person2 = new person("Permana", "Aditiya");

// menampilkan data
person1.showName();
document.write("<br>");
person2.showName();