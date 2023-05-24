const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(input) {
  const compare = (a,b) => {
    if(a.length < b.length) {return -1}
    if(a.length > b.length) {return 1}
    return 0;
  }
  return input.sort(compare)

}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let newArr = []
  let length = word.length
  for (let letter = 0; letter < length; letter++){
    newArr.unshift(word.slice(length-letter,length) + word.slice(0,length-letter))
  }
  return newArr
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  sum = Math.max(...numbers) - Math.min(...numbers) 
  return typeof sum == "number" ? sum : numbers 
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
    return message.replace(' ','').split('').map(x => dictionary[x.toUpperCase()] || '').join(' ')
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
