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

// create variables for object parameters
var person1 = new person("Aditiya", "Permana");
var person2 = new person("Permana", "Aditiya");

// display data
person1.showName();
document.write("<br>");
person2.showName();