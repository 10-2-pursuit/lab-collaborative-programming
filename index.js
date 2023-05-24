const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} strArr - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(strArr) {
  return strArr.sort((a,b) => (a.length > b.length) ? 1 : (a.length < b.length) ? -1 : 0);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let result = [];
  if(word.length == 0){
    return result;
  }
  let stringTemp = word.split('');
  for (let i = 0; i < word.length - 1; i++){
    let tempStr = stringTemp.shift();
    stringTemp.push(tempStr)
    result.push(stringTemp.join(''));
  }
  result.push(word);
  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if(numbers.length == 0){
    return [];
  }

  if(!numbers.every(a => typeof(a) == "number")){
    return numbers;
  }
  
  numbers = numbers.sort((a,b) => a - b);

  let maxNum = numbers[numbers.length - 1];
  let minNum = numbers[0];

  return maxNum - minNum;
  
  /**
   * is this one faster than .sort?
   * return Math.max(...numbers) - Math.min(...numbers);
  */
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
  let translated = [];

  message = message.split(' ').join('').split('');

  for(let char of message){
    translated.push(dictionary[char.toUpperCase()]);
  }

  return translated.join(' ');
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
