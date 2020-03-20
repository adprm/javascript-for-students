// JavaScript DOM Create Element
// membuat element h1
var createElement = document.createElement("h1");

// megisi text kedalam tag element
createElement.textContent = "Saya membuat element ini dengan JavaScript DOM";

// memasukkan element kedalam body
document.body.append(createElement);