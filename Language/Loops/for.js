const fruits = ['🍎', '🍌', '🍎', '🍇', '🍍', '🍏', '🍉', '🍎']
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log()
// to print all of them 
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i])
}
for (let i = 1; i <= 10; i++) {
    console.log(i * 21)
}

// *cleaner way
for (const fruit of fruits) {
    console.log(fruit)
}

const numbers = [1, 2, 3, 4, 5, 6]
let sum = 0
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    console.log(numbers[i])
}
console.log(`Sum of all the numbers : ${sum}`)

let anotherSum = 0
for (const n of numbers) {
    console.log(n)
    anotherSum += n
}
console.log(`Sum of all the numbers : ${anotherSum}`)

// double and push back in another array 
let result = []
for (const val of numbers) {
    console.log(val * 2)
    result.push(val * 2) // double and push back in result array
}
console.log(result)

// function to double the values of the array 
const double = (numbers) => {
    let res = []
    for(const n of numbers){
        res.push(n * 2)
    }
    return res
}
console.log(double([3,3,5,7,8]))

// function to square the values of the array 
const square = (vals) => {
    let val = []
    for(const v of vals){
        val.push(v * v) // or v**2
    }
    return val
}
console.log(square([3,4,6,7]))