const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrayOfStrings) {
  return arrayOfStrings.sort((a,b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let scrolledArray = [];
  if(word.length < 1){
    return scrolledArray
  }
for(let i = 1; i < word.length; i++) {
  const tempWord = word.slice(i)+ word.slice(0,i)
  scrolledArray.push(tempWord)
 
}
scrolledArray.push(word)
return scrolledArray
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if(numbers.length === 0) {
    return []
  }
  for(let num of numbers){
    if(typeof num !== 'number'){
    return numbers
  }  
}
return Math.max(...numbers) - Math.min(...numbers)
}
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  let morseCodeMessage = []
  message = message.replaceAll(" ", "");
  for( words of message) {
    morseCodeMessage.push(dictionary[words.toUpperCase()])
  }
  return morseCodeMessage.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
