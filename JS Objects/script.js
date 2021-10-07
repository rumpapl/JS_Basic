// create an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person);

// add new proparty on persion
person.fullName = `${person.firstName} ${person.lastName}`;
console.log(person);

// delete proparty from person object
delete person.age;
console.log(person);

// adding a method to person object
person.name = function () {
    return this.firstName + ' ' + this.lastName;
}
console.log(person);

// calling a object method
console.log(`Name: ${person.name()}`);

// use built-in method
console.log(`Name: ${person.name().toUpperCase()}`);

/*
*******
-> Displaying  Object Properties.
*******
*/

const user = {
    name: "John",
    age: 30,
    city: "New York"
};

// show proparties of an object using string
document.getElementById('u-string').innerHTML = `Using string: ${user.name}, ${user.age}, ${user.city}`;

// Displaying the Object in a Loop
txt='';
for (let x in user){
    txt += user[x]+','
};
document.getElementById('u-loop').innerHTML =`<br> Using Loop: ${txt}`;

// Any JavaScript object can be converted to an array using Object.values().
const myArray = Object.values(user);
console.log(myArray);
document.getElementById("u-object-values").innerHTML = `<br>Using Object.values(): ${myArray}`;

// Using JSON.stringify()
let myString = JSON.stringify(user);
console.log(myString);
document.getElementById('u-json-stringify').innerHTML = `<br>Using JSON.Stringify(): ${myString}`;


