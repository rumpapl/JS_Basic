// js async 
console.log('JS Asynchronous:');

function display(param, elementName) {
    document.getElementById(elementName).innerHTML = param;
}

function getFileInfo(callbackFun) {
    console.log('In function');
    let req = new XMLHttpRequest();
    req.open('GET', "./mycar.html");
    console.dir(req);
    req.onload = function () {
        if (req.status === 200) {
            callbackFun(this.responseText, 'show-html');
        }
        else {
            callbackFun(`Errors: ${req.status}`, 'show-html');
        }
    }
    req.send();
    console.log('End Function');
}


// JS PROMISE .THEN .CATCH
console.log('js promise');
const myPromise = new Promise(function (onsolve, onreject) {
    console.log('In promise');
    let req = new XMLHttpRequest();
    req.open('GET', "./mycar.html");
    console.dir(req);
    req.onload = function () {
        if (req.status === 200) {
            onsolve(req.response);
        }
        else {
            onreject(new Error('File not found!'))
        }
    }
    req.send();
});

myPromise
    .then((res) => {
        display(res, 'show-pro');
    })
    .catch((err) => {
        display(`<h1>${err.message}</h1>`,'show-pro');
    });
