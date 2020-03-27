// JavaScript Object This
var person = {
    // property
    firstName: "Aditiya",
    lastName: "Permana",
    age: 19,

    // method
    fullName: function () {
        document.write(`${this.firstName} ${this.lastName}`);
    }
}

// mean show object
person.fullName();