// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedFunc", () => {
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        expect(codedFunc(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedFunc(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedFunc(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// GOOD error:  ReferenceError: codedFunc is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: codedFunc
// input: string
// output: string with certain characters changed. 
// process: first, im going to create an object with the key as the letter to be changed and the value as the value that will be changed. Then, i am going to make an array of the string in order to map through the strings. I will create a const of codedCharacters and using map i will iterate through the characters in each string if the character (key) is in the object(using the in built in method), then if the character matches with one of the keys in the object will replace it with the value in the object. My catch all will be just returning the characters without changing them if they do not match with the key.I will want to convert everything to lower case during this process as well, in case one of the characters is upper case. Then i will return the characters, the unchanged and the changed ones together, use .join to convert them back into a string. 

const codedFunc = (string) => { 
    const codeLetters = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0' 
    }
    charactersArray = string.split('')
    const codedCharacters = charactersArray.map(char => {
        if (char.toLowerCase() in codeLetters){
            return codeLetters[char.toLowerCase()]
        } else {
            return char
        }
    })
    return codedCharacters.join('')
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("arrayLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const filterLetterA = "a"
        const filterLetterE = "e"
        expect(arrayLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(arrayLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// GOOD ERROR: ReferenceError: arrayLetter is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: arrayLetter
// input: two arrays : fruitArray and filterLetterA or filterLetterE
// output: depending on if filterLetterA or filterLetterE, an array that only includes the strings that have A or E in them 
// process: create a function that takes in an array of words and depending on which letter is passed as a second input, return only the strings within the array that contain that letter. To do that, use filter method to filter through the strings, use .toLowerCase so that in case the letter is in Upper Case in the array, it can still filter through the word and return the word if it contains the letter (also turn to lowercase). If the string contains the letter, place it in a variable, then return the variable. 

const arrayLetter = (word, letter) => {
    const filteredWord = word.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
    return filteredWord
}

// PASSED

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe ("fullHouseFunc", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house. A full house is exactly one pair and one three of a kind.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        const hand4 = [7, 2, 7, 2, 7]
        expect(fullHouseFunc(hand1)).toEqual(true)
        expect(fullHouseFunc(hand2)).toEqual(false)
        expect(fullHouseFunc(hand3)).toEqual(false)
        expect(fullHouseFunc(hand4)).toEqual(true)
    })
})

// GOOD failure: ReferenceError: fullHouseFunc is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: fullHouseFunc
// input: array of numbers (hand)
// output: boolean value
// process: first, im going to use let to assign hasPair and hasThreeOfAKind to false, to keep track of wether the hand has a pair and a three of a kind or not. Then, I will start a for loop that iterates through each number in the hand starting at index 0 and ending at the length of the hand, incrementing by one. Then, i will use a const to store the current number in the hand and name it num using hand[i]. To calculate how many times a unique number appears in the hand array i am going to use .filter and assign it a variable count, where it will check how many times the value of num is repeated in the hand, so at the end of my .filter function i am going to use .length and that will give me the count of occurences of num in the hand. this was the hard part, now for the easy part. I am going to create an if statement where if count is strictly equal to two, hasPair is going to be reassigned to true. AND another if statement to see if count ===3 then we return hasThreeOfAkind as true. Last if statement if hasPair and hasThreeOfAKind are strictly equal to true, then I return true. And, as the for loop return then I return hasPair and hasThreeOfAKind, and ifit is a fullhouse it should return true, and if it is not, it should return false. 

const fullHouseFunc = (hand) => {
    let hasPair = false
    let hasThreeOfAKind = false
    for(let i=0; i < hand.length; i++){
        const num = hand [i]
        const count = hand.filter(value => value === num).length 
        if(count === 2){
            hasPair = true
        }
        if(count === 3){
            hasThreeOfAKind = true
        }
        if(hasPair && hasThreeOfAKind){
            return true
        }
    }
    return hasPair && hasThreeOfAKind
}
