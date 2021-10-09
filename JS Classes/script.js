// JS Class
// Class Name start with Capital letter
class Cat {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    showName() {
        console.log(`Hello, I am ${this.name}.`);
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
