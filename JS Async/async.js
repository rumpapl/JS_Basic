// js async 
console.log('JS Asynchronous:');

function display(param) {
    document.getElementById('show-html').innerHTML=param;
}

function getFileInfo(callbackFun) {
    console.log('In function');
    let req = new XMLHttpRequest();
    req.open('GET', "./mycar.html");
    console.dir(req);
    req.onload=function () {
        if (req.status === 200){
            callbackFun(this.responseText);
        }
        else{
            callbackFun(`Errors: ${req.status}`);
        }
    }
    req.send();
    console.log('End Function');
}
