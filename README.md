# JavaScript-Function

Functions are sub-programs that can be reused both within the program itself and in other programs.
The function in Javascript is an object. Because it has properties and methods.

# Basic writing of functions

Normal way

```
function nameFunction() {
    console.log("Hello world");
}
```

Function with expression

```
var nameFunction = function () {
    console.log("Hello world");
}
```

function with arrow => function

```
var nameFunction = () => {
    console.log("Hello world");
}
```

Function with arrow => function 1 statement
`var nameFunction = () => console.log("Hello world")`

Constructor function
`var nameFunction = new Function('console.log("Hello world");');`

Calling function
`nameFunction()`
