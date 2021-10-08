const rahim = {
    firstName: 'Rahim',
    lastName: 'Hoc',
    profession: 'Doctor'
}

const kahim = {
    firstName: 'Kahim',
    lastName: 'Islam',
    profession: 'Teacher'
}

const personInfo = {
    info: function () {
        let text = `${this.firstName} ${this.lastName} is a/an ${this.profession}.`;
        return text;
    }
}

// The JavaScript call() Method
console.log(personInfo.info.call(rahim));
console.log(personInfo.info.call(kahim));

// The call() Method with Arguments
const personInfoWithArgs = {
    info: function (city, country) {
        let text = `${this.firstName} ${this.lastName} is a/an ${this.profession}. And he lives in ${city}, ${country}.`;
        return text;
    }
}
console.log(personInfoWithArgs.info.call(rahim, 'Khulna', 'BD'));
console.log(personInfoWithArgs.info.call(kahim, 'London', 'UK'));

// APPLY METHOD
// The call() method takes arguments separately,
// The apply() method takes arguments as an array.
console.log(personInfoWithArgs.info.apply(rahim, ['Khulna', 'BD']));
console.log(personInfoWithArgs.info.apply(kahim, ['London', 'UK']));

// Another example
// You can find the largest number (in a list of numbers) using the Math.max() method:
console.log(Math.max(5, 90, 3, 5));

// avaScript arrays do not have a max() method, you can apply the Math.max() method instead.
console.log(Math.min.apply(null, [3, 5, 2, 6, 90, 45]));