// *Arrays
const groceries = ['🍎', '🍌', '🍎', '🍇', '🍍', '🍏,', '🍉', '🍎']
console.log(groceries);
groceries.push('🍈');
console.log(groceries);
groceries.push('🍑');
console.log(groceries)
console.log()

console.log(groceries[0]); // apple
console.log(groceries[2]); // grape
console.log()

for (let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]);
}

// array methods
console.log(groceries.slice(0, 2)); // exluding last index --> 0,1 elements
console.log(groceries.slice(3, 6));
console.log(groceries.indexOf('🍉'));
console.log(groceries.indexOf('🍎'));
console.log(groceries.length); // length of the array
console.log(groceries.lastIndexOf('🍎'))
 