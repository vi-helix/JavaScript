// to use a block of code many times in our app or an operation multiple times

// this is a function called 'say_myname'
// it has one argument called 'name'
// does: it logs out your name to console
function say_myname(name) {
    console.log(`Your name is ${name}`);
}
say_myname('Kevin');
say_myname('Rahul');

function greeting(name) {
    console.log(`Hey ${name} nice to meet you!!`);
}
greeting('Peterson');

function sum(a, b) {
    return a + b;
}
let s = sum(34, 44);
console.log('Sum is', s);

function factorial(num) {
    let data = 1;
    for (let i = 1; i <= num; i++) {
        data *= i;
    }
    return data;
}
console.log('Factorial of 5', factorial(5));
console.log('Factorial of 5', factorial(10));

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.log()
}
fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
heros = ['IronMan', 'Thor', 'Captain America', 'Hulk', 'SpiderMan'];
printArray(fruits, 5);
printArray(heros, 5);
