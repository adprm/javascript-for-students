var dataProducts = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];


function showProducts() {
    var listProducts = document.getElementById("list-products");
    // clear list barang
    listProducts.innerHTML = "";

    // cetak semua barang
    for (let i = 0; i < dataProducts.length; i++) {
        var btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
        var btnDelete = "<a href='#' onclick='deleteBarang(" + i + ")'>Hapus</a>";

        listProducts.innerHTML += "<li>" + dataProducts[i] + " [" + btnEdit + " | " + btnDelete + "]</li>";
    }
}

function addBarang() {
    var input = document.querySelector("input[name=barang]");
    dataProducts.push(input.value);
    showProducts();
}

function editBarang(id) {
    var newBarang = prompt("Nama baru", dataProducts[id]);
    dataProducts[id] = newBarang;
    showProducts();
}

function deleteBarang(id) {
    dataProducts.splice(id, 1);
    showProducts();
}

showProducts();