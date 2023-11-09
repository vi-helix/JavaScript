const letterFrequency = (phrase) => {
    console.log(phrase)
    let frequency = {}
    for (const letter of phrase) {
        if (letter in frequency) {
            frequency[letter] = frequency[letter] + 1
        }
        else {
            frequency[letter] = 1
        }

    }
    return frequency
}


const wordFrequency = (phrase) => {
    wordList = phrase.split(' ')
    return letterFrequency(wordList)
}

console.log(wordFrequency('yo yo we got it, we got it...'))

