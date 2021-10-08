function Person(name, age, country) {
    this.name = name,
    this.age = age,
    this.country = country
};

console.dir(Person);

Person.prototype ={
    sleep(){
        console.log('Sleep Time!');
    }
}


const korim = new Person('Karim', 27, 'BD');
console.log(korim);
korim.sleep();

// adding eat method to person prototype
Person.prototype={
    // to add existing prototype
    ...Person.prototype,
    eat(){
        console.log('Time to eat!');
    }
}

const rohim = new Person('Rohim', 27, 'BD');
console.log(rohim);
rohim.sleep();
rohim.eat();

Person.prototype={
    ...Person.prototype,
    eyeColor:'green',
}

const salam = new Person('Salam', 33, 'UK');
console.dir(salam);
console.log(salam.name);
console.log(salam.age);
console.log(salam.country);
console.log(salam.eyeColor);
salam.eat();
salam.sleep();

// console.log('Protopyte');

// const testObj ={
//     name: 'karim',
//     age: 23
// }

// console.log(testObj);

// testObj.prototype={
//     call(){
//         console.log("phone ring");
//     }
// }
// console.dir(testObj);
// testObj.prototype.call();
