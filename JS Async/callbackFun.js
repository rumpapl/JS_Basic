
// using this function as callback
function display(result) {
    console.log(result);
}

// calculate sum and 
// show result using callback function
function sum(num1, num2, callbackFun) {
    let result = num1 + num2;
    callbackFun(result);
    document.getElementById('sum').innerHTML=result;
}

// calculate subtraction and 
// show result using callback function
function dif(num1, num2, callbackFun) {
    let result = num1 - num2;
    callbackFun(result);
    document.getElementById('dif').innerHTML=result;
}

// calculate multiplication and 
// show result using callback function
function mul(num1, num2, callbackFun) {
    let result = num1 * num2;
    callbackFun(result);
    document.getElementById('mul').innerHTML=result;
}

// calculate divition and 
// show result using callback function
function div(num1, num2, callbackFun) {
    let result = num1 / num2;
    callbackFun(result);
    document.getElementById('div').innerHTML=result;
}

sum(3, 4, display); // output: 7
dif(50, 40, display); // output: 10
mul(3, 7, display); // output: 21
div(30, 5, display); // output: 6