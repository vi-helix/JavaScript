// **getElementById('example')
// const title = document.getElementById('main-heading');
// console.log(title);

// **getElementByClassName('example');
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// **getElementByTagName('example')
// const liTag = document.getElementsByTagName('li');
// console.log(liTag);

// **querySelector('example');
// const container = document.querySelector('div');
// console.log(container);

// **querySelectorAll()
// const allContainer = document.querySelectorAll('div');
// console.log(allContainer);


const title = document.querySelector('#main-heading');
title.style.color = 'crimson';
console.log(title);

const listItems = document.querySelectorAll('.list-item');
for(i = 0;i<listItems.length;i++){
    listItems[i].style.fontSize = '1rem';
    if(i%2==0){
        listItems[i].style.backgroundColor = '#222';
        listItems[i].style.color = '#fff';
    }
}
console.log(listItems)


// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying the text
li.innerText = 'X-Man';
