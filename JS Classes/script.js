// JS Class
// Class Name start with Capital letter
class Cat {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    // static method
    static greed() {
        return 'Hello! I am a static method.';
    }

    static hello(obj){
        return 'Hello, '+ obj.name;
    }
    showName() {
        console.log(`Hello, I am ${this.name}.`);
        return this.name;
    }

    showAge() {
        console.log(`I am ${this.age} years old.`);
    }
}

// Create objects using Cat Class
const cat1 = new Cat('Rita', 5);
const cat2 = new Cat('Gola', 3);
console.log(cat1);
console.log(cat2);

// show methods
cat1.showName();
cat1.showAge();
cat2.showName();
cat2.showAge();

// Inheritance 
class Persian extends Cat {
    constructor(name, age, tailLength) {
        super(name, age);
        this.tailLength = tailLength
    }

    tailInfo() {
        return this.tailLength;
    }
    // call parent 
    show() {
        return this.name + ' && ' + this.age;
    }
}

// Create an onject
const par_cat1 = new Persian('Damo', 7, 10);
par_cat1.showName();
par_cat1.showAge();
console.log(`${par_cat1.name}' tail is ${par_cat1.tailInfo()}inch long.'`);
console.log(par_cat1.show());

// Class Static 
// create a object from Cat class
const cat3 = new Cat('Tin', 1);

// calling methods
cat3.showName();
cat3.showAge();
// console.log(cat3.greed());
// above method call occures an error, 
// Cz static method can`t be called from object.
// Static method only can be called using Calss name, 
// like below,
console.log(Cat.greed());

// If you want to use the cat3 object inside the static method
// you can send it as a parameter:
// ex:
let msg = Cat.hello(cat3);
console.log(msg);


