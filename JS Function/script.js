// anonymous self-invoking function
(function () {
    console.log('hello');
})();


// JavaScript functions can be used in expressions
function sum(a, b) {
    return a * b;
}

let result = sum(3, 2) * 3;
console.log(result);

// function type
console.log(typeof function name(params) {

});


function myFunction(a, b) {
    return arguments.length;
}
console.log(myFunction(3, 5));


// arrow function
const fun = (a, ...b) => {
   console.log(a,b);
}

fun(4,5,6,7,8);

// The Arguments Object
function findArgsLength() {
    return arguments.length;
}
console.log(findArgsLength(1, 123, 500, 115, 44, 88));

// will show error on console.
// let x = () => arguments.length;
// console.log(x(1, 500, 115, 44, 88));

// In a browser the page object is the browser window.
// The function above automatically becomes a window function.
// findArgsLength & window.findArgsLength is the same function.
console.log(window.findArgsLength(2,3));
console.log(findArgsLength(2,3));
// here this is the window itself
console.log(this);
console.log(this.findArgsLength(2,3));


let x = myFunction();            

function myFunction() {
  return this; // this => window object
}
console.log(x);

const myObject = {
    firstName:"John",
    lastName: "Doe",
    showThis: function () {
      return this; // this => myObject
    }
  }
  console.log(myObject.showThis());  






