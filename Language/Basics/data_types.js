// data types 
/*
numbers 👉 1, 3, 3.787, 1000
strings 👉 'Hello', 'Rohan'
arrays 👉  [1,2,4,'Apple',3.44]
objects 👉 {}
boolean 👉 true / false
*/

// number
let length = 12;
let distence = 12.4;
console.log(typeof (length));

// string
let color = "Yellow";
let wear = "Menswear";
console.log(typeof color);

// boolean
let isLogin = true;
let isSeatAvail = false;
console.log(typeof isLogin);

// object 
let person = {
    name: 'Andrew Flintoff',
    age: 56,
    salary: 700000
};
console.log(typeof (person))
console.log(person.name);
console.log(person.age);

// array object 
let arr = [1, 3, 5, 7, 78];
console.log(typeof (arr));

// date object
let date = new Date();
console.log(date);
console.log(typeof (date)); // object
date = date.toLocaleString();
console.log(date);
console.log(typeof date) // string

// exponetial notation 
let exp = 123e7;
let exp1 = 123e-3;
console.log(exp); // 1230000000
console.log(exp1); // 0.123
