const min = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
        if(number<result){
            result = number
        }
    }
    return {result}
} 
console.log(min([3,4,5,1,8,89]))