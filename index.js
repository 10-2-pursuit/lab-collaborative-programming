const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
  return array.sort((a, k) => a.length - k.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
  function textScroller(word) {
    let arrOfShuff = [];
    if(word.length < 1){
      return arrOfShuff;
    }
  for(let i = 1; i < word.length; i++) {
    const shuffledWord = word.slice(i)+ word.slice(0,i);
    arrOfShuff.push(shuffledWord);
  }
  arrOfShuff.push(word);
  return arrOfShuff;
  }

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers === ''){
    return [];
  }
  if (numbers.every(a => typeof(a) === "number")){
   min = Math.min(...numbers);
   max = Math.max(...numbers);
   diff = max - min ;
   return diff ;
  }
  return numbers;
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
  let morseMessage = [];
 message = message.replaceAll(" " , "");
  for (letters of message){
    morseMessage.push(dictionary[letters.toUpperCase()])
  }
  return morseMessage.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
