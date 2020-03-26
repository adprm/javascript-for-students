// JavaScript Ajax Basic Syntax Fetch
// syntax dasar menggunakan method fetch
fetch('http://example.com/movies/json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });

// pengiriman data dengan method post
fetch(url, {
        method: "POST", //  GET, POST, PUT, DELETE, etc
        mode: "cors", //  no-cors, cors, *same-origin
        cache: "no-cache", //  *default, no-chache, reload, fore-chache
        credentials: "same-origin", //  include, *same-origin, omit
        headers: {
            "Content-type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", //  manual, follow, error
        referrer: "no-referrer", //  no-referrer, client
        body: JSON.stringify(data), //  body data type must match "Content-Type" header  
    })
    .then(response => response.json()); //  parses JSON responses into native JavaScript Objects