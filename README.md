# JavaScript-Ajax

AJAX stands for Asynchronous Javascript Aand XML.
AJAX works for:

<ul>
<li>Take data from the server in the background</li>
<li>Update the web display without having to relaod the browser;</li>
<li>Send data to the server in the background.</li>
</ul>

# Basic writing of ajax

Create an ajax object

```
var xhr = new XMLHttpRequest();
```

Determine the handler function for the event

```
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
```

Determine the method and url

```
xhr.open("GET", url, true);
```

Send request

```
xhr.send();
```

Download source code https://github.com/adprm/JavaScript-for-Students/archive/JavaScript-Ajax.zip
