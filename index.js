const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(sentence) {
  return sentence.sort((a, b) => a.length - b.length)
}
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(sentence) {
  if (sentence.length === 0) {
    return [];
  }
  const reversedWord = [];
  let sentenceArray = sentence.split("")
  for (let i = 0; i < sentence.length - 1; i++){
    let rotatedWord = sentenceArray.shift() 
    sentenceArray.push(rotatedWord)
    reversedWord.push(sentenceArray.join(""))
  }
  reversedWord.push(sentence)
  return reversedWord
}


//  sentence = sentence[sentence.length - 1] + sentence.substring(0, sentence.length - 1)


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers.length === 0) {
    return [];
  } if(!numbers.every(element => typeof (element) == "number")) {
    return numbers
  }
    const sortedNumbers = numbers.sort((a, b) => a - b)
    const lowestNumbers  = sortedNumbers[0];
    const highestNumbers = sortedNumbers[sortedNumbers.length - 1];
    differenceInNumbers = highestNumbers - lowestNumbers
  return differenceInNumbers
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
  morseCodeArray = [];
  message = message.replaceAll(" ", "");
  message.split("");
  for (const mess of message) {
    morseCodeArray.push(dictionary[mess.toUpperCase()])
  }
  return morseCodeArray.join(" ").replace(20, "")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
