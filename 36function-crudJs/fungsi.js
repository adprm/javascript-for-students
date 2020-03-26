var dataProducts = [
    "Notebooks",
    "Pencil",
    "Marker"
];


function showProducts() {
    var listProducts = document.getElementById("list-products");
    // clear list items
    listProducts.innerHTML = "";

    // print all items
    for (let i = 0; i < dataProducts.length; i++) {
        var btnEdit = "<a href='#' onclick='editItem(" + i + ")'>Edit</a>";
        var btnDelete = "<a href='#' onclick='deleteItem(" + i + ")'>Delete</a>";

        listProducts.innerHTML += "<li>" + dataProducts[i] + " [" + btnEdit + " | " + btnDelete + "]</li>";
    }
}

function addItem() {
    var input = document.querySelector("input[name=item]");
    dataProducts.push(input.value);
    showProducts();
}

function editItem(id) {
    var newItem = prompt("New name", dataProducts[id]);
    dataProducts[id] = newItem;
    showProducts();
}

function deleteItem(id) {
    dataProducts.splice(id, 1);
    showProducts();
}

showProducts();