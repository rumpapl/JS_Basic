
// Create a Object Constactor
function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.name = function name() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log("Person dir:");
console.dir(Person);

const mother = new Person('tulu', 'paul', 46);
const father = new Person('sushil', 'paul', 55);

console.log(mother);
console.log(father);
console.log(mother.name().toUpperCase());
console.log(father.name().toUpperCase());

/*
**The JavaScript prototype property allows you
**to add new properties to object constructors.
*/

// Does not add property on object constractor
Person.eyeColor = 'blue';
console.log(mother.eyeColor); // => undefine

// The JavaScript prototype property allows you to add new properties to object constructors
Person.prototype.eyeColor = 'black';
console.log(mother.eyeColor); // => black
console.log(father.eyeColor); // => black

console.dir(Person);



