const max = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
        if(number > result){
            result = number
        }
    }
    return {result}
}
console.log(max([3,4,6,78,8]))