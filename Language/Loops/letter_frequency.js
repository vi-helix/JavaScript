const letterFrequency = (phrase) => {
    console.log(phrase)
    // make a frequency obj {}
    let frequency = {}
    for (const letter of phrase) {
        // check if letter exist in frequency
        if (letter in frequency) {
            // increment the value + 1
            frequency[letter] = frequency[letter] + 1
        }
        else {
            // otherwise, set the value to 1
            frequency[letter] = 1
        }

    }
    return frequency
}

console.log(letterFrequency('hahahehehihi'))