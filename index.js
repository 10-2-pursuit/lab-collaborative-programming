const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  for (let word of words) {
    if (typeof word !== "string") {
      return words;
    }
  }
  const sortWords = words.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortWords;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const scrollPositions = [];

  if (word === "") {
    return scrollPositions;
  }
  for (let i = 1; i < word.length; i++) {
    scrollPositions.push(`${word.substring(i)}${word.slice(0, i)}`);
  }
  scrollPositions.push(word);
  return scrollPositions;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  for (const num of numbers) {
    if (typeof num !== "number") {
      return numbers;
    }
  }
  return Math.max(...numbers) - Math.min(...numbers);
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
  let morseCodeMessage = [];
  message = message.replaceAll(" ", "");
  for (letters of message) {
    morseCodeMessage.push(dictionary[letters.toUpperCase()])
  }
  return morseCodeMessage.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
