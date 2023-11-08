const person = {
    name: 'Leonardo', // key-value pairs
    shirtColor: 'white'
}

// access object: dot notation
console.log(person.name)
console.log(person.shirtColor)

// access object: bracket notation
console.log(person['name'])
console.log(person['shirtColor'])

// assign object
person.phone = '1-344-555--4444'
person['age'] = 54
console.log(person.phone)
console.log(person['age'])


const introducer = (name, shirt, assets, liabilities) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: assets,
        liabilities: liabilities,
        netWorth: function () {
            return this.assets - this.liabilities
        }

    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is $${person.netWorth()}`
    return intro
}
console.log(introducer('vinay', 'black', 100000, 50000))  


const Car = (name, model, price) => {
    const car = {
        name: name,
        model: model,
        price: price
    }
    const about = `This is ${car.name} model ${car.model} and worth ${car.price}Cr!`
    return about
}
console.log(Car('Buggati', 'Chiron', 18))