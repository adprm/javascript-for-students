// JavaScript Obejct
// make an object from the car
var car = {
    // make property
    name: "Toyota",
    color: "red",
    model: 500,

    // make a method
    start: function () {
        document.write("This method start<br>");
    },
    drive: function () {
        document.write("This method drive<br>");
    },
    brake: function () {
        document.write("This method brake<br>");
    },
    stop: function () {
        document.write("This method stop<br>")
    }
};

// access the mehod property and object method
// nameobject.property
document.write(car.name + "<br>");
document.write(car.model + "<br>");

// nameobject.method
car.start();
car.stop();