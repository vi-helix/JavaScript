const letterCounter = (phrase) => {
    let result = 0
    for (const letter in phrase) { // index
        // console.log(Number(letter)+1)
        result = Number(letter) + 1
    }
    // return { result }
    return { result: result } // return as an object

}

const phrase = 'hey, can you please bring me a cup of coffee...??'
console.log(letterCounter(phrase))
console.log(phrase.length, 'same 😂', 'kya gunda banega re tu...')