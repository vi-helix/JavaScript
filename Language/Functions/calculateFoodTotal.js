function sum(a, b) {
    return a + b;
}

function calculateFoodTotal(food, tip) {
    let tipPercentage = tip / 100;
    let tipAmount = food * tipPercentage;
    let total = sum(food, tipAmount);
    return total;
}

let totalAmount = calculateFoodTotal(300, 20);
console.log(totalAmount);

