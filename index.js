const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  if (!Array.isArray(words)) {
    return words;
  }

  for (let word of words) {
    if (typeof word !== "string") {
      return words;
    }
  }

  return words.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  if (word === '') {
    return [];
  }

  const scrollingPositions = [];

  for (let i = 1; i <= word.length; i++) {
    const scrolledWord = word.slice(i) + word.slice(0, i);
    scrollingPositions.push(scrolledWord);
  }

  return scrollingPositions;
}




/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers.some((num) => typeof num !== 'number')) {
    return numbers;
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
  const words = message.toUpperCase().split(' ');
  const translatedMessage = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const translatedWord = [];

    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (dictionary[char]) {
        translatedWord.push(dictionary[char]);
      }
    }

    translatedMessage.push(translatedWord.join(' '));
  }

  return translatedMessage.join(' ');
}




module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
