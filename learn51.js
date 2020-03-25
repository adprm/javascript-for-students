// JavaScript Ajax Introduction
// membuat objek ajax
var xhr = new XMLHttpRequest();

// menentukan fungsi handler untuk event
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

// menentukan method dan url
xhr.open("GET", url, true);

// mengirim request
xhr.send();