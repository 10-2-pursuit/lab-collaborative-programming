const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(stringArray) {
  
  return stringArray.sort((a, b)=> a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(string) {
  let scrollStr = [];
  let tempString;

  for (let i = 0; i < string.length; i++) {
    tempString = '';

    for (let j = 1; j <= string.length; j++) {
      tempString += string[(i + j) % string.length];//% keep from adding extra chars
    }
    scrollStr.push(tempString);
  }
  return scrollStr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {

  const result = numbers.every(element => {
    return typeof element === 'number';
  });

  if (!result) {
    return numbers;
  } else {
    return Math.max(...numbers) - Math.min(...numbers);
  }
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
  message = message.replace(/ /g, "");
  let splitMessage = message.toUpperCase().split('');
  let codeString = '';

  for(let i = 0; i <= splitMessage.length; i++) {
    for (let letter in dictionary) {
      if (letter == splitMessage[i]) {
        codeString += dictionary[letter] + ' ';
      }
    }
  }

  codeString = codeString.trim();

  console.log(codeString)
  return codeString;
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
