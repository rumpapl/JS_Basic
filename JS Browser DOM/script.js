
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
    TimeoutId = setTimeout(function(){console.log("Start");}, 2000);
    console.log("wait");
}

const stopAlert = () =>{
    clearTimeout(TimeoutId);
    console.log("Stop");
} 

// setInterval clearIntervalexample
const startTimeInterval = () => {
    IntervalId = setInterval(function(){console.log("Start");}, 1000);
    
}

const stopTimeInterval = () =>{
    clearInterval(IntervalId);
    console.log("Stop");
} 








