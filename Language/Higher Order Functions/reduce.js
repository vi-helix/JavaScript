const nums = [1, 2, 3, 4]
const sum = nums.reduce(function (prev, curr) {
    return prev + curr
})
console.log(sum)
// es6 way
const result = nums.reduce((prev, curr) => prev + curr, 0)
console.log(result)

function add(a, b) {
    return a + b
}
const res = nums.reduce(add) // take two numbers and call the add function then take the returned number and call with the next number from nums to add and so on... till last number
console.log(res)

function multiply(a, b) {
    return a * b
}
const multi = nums.reduce(multiply)
console.log(multi) // multiply all the values fromm nums