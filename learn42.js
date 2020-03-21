// JavaScript Obejct
// membuat object dari car
var car = {
    // membuat property
    name: "Toyota",
    color: "red",
    model: 500,

    // membuat method
    start: function () {
        document.write("Ini method start<br>");
    },
    drive: function () {
        document.write("Ini method drive<br>");
    },
    brake: function () {
        document.write("Ini method brake<br>");
    },
    stop: function () {
        document.write("Ini method stop<br>")
    }
};

// mengakses mehod property dan method object
// nameobject.property
document.write(car.name + "<br>");
document.write(car.model + "<br>");

// nameobject.method
car.start();
car.stop();