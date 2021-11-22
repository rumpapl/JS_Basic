
function popup() {
    let text = `
    Hello,
    Everyone...
    JavaScript.
    Line-breaks in a popup box.`;
    alert(text);
}

// global variable
var TimeoutId;
var IntervalId;


// setTimeout clearTimeout example
const startTime = () => {
    TimeoutId = setTimeout(function () { console.log("Start"); }, 2000);
    console.log("wait");
}

const stopAlert = () => {
    clearTimeout(TimeoutId);
    console.log("Stop");
}

// setInterval clearIntervalexample
const startTimeInterval = () => {
    IntervalId = setInterval(function () { console.log("Start"); }, 1000);

}

const stopTimeInterval = () => {
    clearInterval(IntervalId);
    console.log("Stop");
}

// count-down-app using setTimeout
var TimerId;

function startCountTimer(elementId) {

    let elementContent = document.getElementById(elementId);
    let countValue = elementContent.value;
    // console.log(`input value: ${countValue}`);
    countValue -= 1;

    if (countValue == 0) {
        elementContent.value = 'Done!';
        return;
    }
    else {
        elementContent.value = countValue;
    }

    TimerId = setTimeout(() => { startCountTimer(elementId); }, 1000);
}

function stopCountTimer() {
    clearTimeout(TimerId);
}


// // count-down-app using setTimeout
var intervalId;

function startCounter(elementId) {
    let elementContent = document.getElementById(elementId);
    let elementValue = elementContent.value ? elementContent.value : '3';
    // console.log(elementValue);
  
    intervalId = setInterval(()=>{
        if(elementValue == 0){
            elementContent.value = 'Done!';
            return false;
        }
        else{
            elementContent.value = elementValue;
            elementValue -= 1;
        }
    }, 1000);
}

function stopCounter() {
    clearInterval(intervalId);
}






