let a = 13;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // remainder
console.log(a ** b); // a to the power b
console.log(a++); // print then increase by one
console.log(--a); // increase by one then print
console.log(a--);
console.log(--a);
console.log()
console.log(a);
a += 2; // same as a = a + 2 
a **= 2;
console.log(a);

// comparison operator
let val1 = 1;
let val2 = '1';
console.log(val1 == val2); // checks similarity 
console.log(val1 === val2); // checks similarity with data type
let x = 4;
let y = 6;
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x != y);
console.log(val1 != val2); // checks not equal and inverts it
console.log(val1 !== val2); // checks not equal with type and inverts it
let z = x > y ? x : y; // store the greater value in z
console.log(z);
let str1 = 'A';
let str2 = 'B';
console.log(str1 > str2); // B is Greater than A
let entity1 = '45';
let entity2 = '4';
let result = entity1 < entity2;
console.log(result); // false

// string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + ' ' + lastName;
console.log(fullName);
fullName += ', Good Morning!';
console.log(fullName);
let str = 'Ram'
console.log(str + 5);
console.log('5' + 5 + 5);
console.log(5 + 5 + '5'); // 5+5 = 10 concat with 5 --> 105
console.log(typeof (val1));
console.log(typeof str);

// bitwise operator 
let bit1 = 4;
let bit2 = 5;
console.log(bit1 & bit2); // bitwise and
console.log(bit1 | bit2); // or
console.log(bit1 ^ bit2); // xor
console.log(~bit1); // not
console.log(bit1 << 2); // left shift
console.log(bit2 >> 2); // right shift

