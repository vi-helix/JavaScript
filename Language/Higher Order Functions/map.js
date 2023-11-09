/*
higher order functions
map 
filter 
reduce 
*/
// *map --> loops and returns an array 
[1, 2, 3, 4, 5].map(number => console.log(number));
console.log(); // here semicolon is mandaratory
[1, 3, 4, 5, 7].map(val => {
    console.log(val * 2)
});
let result = [2, 4, 6, 8, 10].map(number => number * 2)
console.log(result)

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}
console.log(doubleMap([3, 4, 5, 76]))