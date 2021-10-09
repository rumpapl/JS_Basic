// JS Class
// Class Name start with Capital letter
class Cat {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    showName() {
        console.log(`Hello, I am ${this.name}.`);
        return this.name;
    }

    showAge(){
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
class Persian extends Cat{
    constructor(name, age, tailLength){
        super(name, age);
        this.tailLength = tailLength
    }

    tailInfo(){
        return this.tailLength;
    }
    // call parent 
    show(){
       return this.name + ' && '+ this.age;
    }
}

// Create an onject
const par_cat1= new Persian('Damo', 7, 10);
par_cat1.showName();
par_cat1.showAge();
console.log(`${par_cat1.name}' tail is ${par_cat1.tailInfo()}inch long.'`);
console.log(par_cat1.show());