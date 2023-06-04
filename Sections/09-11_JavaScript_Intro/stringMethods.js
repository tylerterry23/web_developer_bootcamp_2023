
// STRING METHODS

// The following methods are available to all strings:

// upperCase/lowerCase
// toUpperCase() and toLowerCase() return a new string with the original string converted to uppercase or lowercase, respectively:
let randomPhrase = "Is it me you're looking for?"
console.log(randomPhrase.toUpperCase()) // "IS IT ME YOU'RE LOOKING FOR?"
console.log(randomPhrase.toLowerCase()) // "is it me you're looking for?"

// trim
// trim() returns a new string with any leading and trailing whitespace removed:
let extraWhiteSpace = "   Hello World    "
console.log(extraWhiteSpace.trim()) // "Hello World"

// indexOf
// indexOf('word or character') returns the index of the first occurrence of a substring. If the substring is not found, indexOf() returns -1:
let sentence = "The quick brown fox jumps over the lazy dog."
console.log(sentence.indexOf("quick")) // 4
console.log(sentence.indexOf("slow")) // -1 (not found)

// slice
// slice(startIndex, endIndex) returns a new string containing the characters from startIndex up to but not including endIndex. If you omit endIndex, slice() returns all characters from startIndex to the end of the string:
let fullName = "John Doe"
console.log(fullName.slice(0, 4)) // "John"
console.log(fullName.slice(3)) // "n Doe"

// replace
// replace('old', 'new') returns a new string with some or all matches of old replaced by new. Note that replace() is case sensitive:
let wrongText = "The colors are red, orange, yellow, green, blue, indigo, violet."
let correctText = wrongText.replace("indigo", "ultraviolet")
console.log(correctText) // "The colors are red, orange, yellow, green, blue, ultraviolet, violet."
