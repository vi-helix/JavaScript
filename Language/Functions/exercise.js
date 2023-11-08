// simple way
function sum(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
console.log(sum(45,5));
console.log(subtract(45,5));
console.log(multiply(45,5));
console.log(divide(45,5));
console.log()

// modern way 
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;
console.log(add(90,5));
console.log(sub(90,5));
console.log(mul(90,5));
console.log(div(90,5));

