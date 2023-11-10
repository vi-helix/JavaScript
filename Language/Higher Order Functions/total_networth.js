const actors = [
    { name: 'akshay', networth: 400000000 },
    { name: 'ajay', networth: 1200000000 },
    { name: 'shahrukh', networth: 4050000000 },
    { name: 'salmon bhoi', networth: 40200000000 },
]
const result = actors.reduce((prev, curr) => prev + curr.networth, 0) // first prev = 0, then returned value and so on...
console.log(result)