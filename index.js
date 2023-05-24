const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(String) {
  let sortedArray = String.sort((str1, str2) => {
    if (str1.length > str2.length) {
      return 1
    }

    if (str1.length < str2.length) {
      return -1;
    }

    return 0
  });
  console.log(sortedArray)
  return sortedArray
}


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let newArrayOfStrings = [];
  for (let i = 0; i < word.length; i++) {
    newArrayOfStrings.unshift(word.slice(word.length - i) + word.slice(0, word.length - i));
  }
  return newArrayOfStrings;
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

  if(!numbers.every(number => typeof(number) == "number")){
    return numbers;
  }

  numbers = numbers.sort((a,b) => a - b);

  let largestNumber = numbers[numbers.length - 1];
  let smallestNumber = numbers[0];

  return largestNumber - smallestNumber;
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
  message = message.replaceAll(" " , "");
  for (morse of message){
    morseCodeMessage.push(dictionary[morse.toUpperCase()])
  }
  
  return morseCodeMessage.join(" ")
}



module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
