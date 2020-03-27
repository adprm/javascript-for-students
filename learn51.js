// JavaScript Ajax Introduction
// create an ajax object
var xhr = new XMLHttpRequest();

// determine the handler function for the event
xhr.onreadystatechange = function () {
    // ...
};
xhr.onload = function () {
    // ...
};
xhr.onerror = function () {
    // ...
}
xhr.onprogress = function () {
    // ....
}

// determine the method and url
xhr.open("GET", url, true);

// send request
xhr.send();