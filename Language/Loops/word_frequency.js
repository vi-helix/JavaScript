const wordFrequency = (phrase) => {
    let frequency = {}
    wordList = phrase.split(' ')
    for (const word of wordList) {
        if (word in frequency) {
            frequency[word]++
        }
        else {
            frequency[word] = 1
        }
    }
    return frequency
}

console.log(wordFrequency('yo yo we got it, we got it...'))
