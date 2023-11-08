// user input
fruit = prompt("What is your favorite fruit");
console.log(fruit);
 
food = prompt('Enter amount of Food? ');
food = Number(food);
tipPercentage = Number(prompt('Tip %?'))/100;
tipAmount = food * tipPercentage;
console.log("Tip Amount : " ,tipAmount);
totalAmount = tipAmount + food;
console.log("Total Amount : ", totalAmount)