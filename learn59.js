// JavaScript Ajax Basic Syntax Axios
// link import axios via cdn
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// syntax dasar axios
axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(function (response) {
        // handle succses
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always excuted
    })