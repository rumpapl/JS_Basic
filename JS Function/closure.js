// CLOSURE

const sub = function () {
    return 1;
}

// ex:
const add = (function () {
    let count = 0;
    return function () {
        return count += 1;
    }
})();

console.dir(add);
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
