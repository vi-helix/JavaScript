// filter 
const filter = (numbers,greaterThan) =>{
    let result = []
    for(const number of numbers){
        if(number>greaterThan){
            result.push(number)
        }
    }
    return result
}
console.log(filter([2,3,4,5,6,8],4));

// *filter --> loops and returns an array
const nums = [1,2,3,4,5,6,7]
console.log(nums.filter(num => num>=3 && num<=6))

const actors = [
    {name:'johnny',networth:29000000},
    {name:'amber',networth:1009099},
    {name:'leonardo',networth:98000000}
]
console.log(actors.filter(actor => actor.networth > 10000000))