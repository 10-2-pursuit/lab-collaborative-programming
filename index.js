const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
 function sortByStringLength(stringsOfArr) {
  return stringsOfArr.sort((a,b)=>(a.length-b.length))
// 

  // let newArr= [];
  // for(let arr of string){
  //   if(!string){
  //     return newArr 
  //   }
  // }
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word){
let scrollWord = [];
  if(word.length < 1){
    return scrollWord
  }
for(let i = 1; i < word.length; i++) {
  const tempWord = word.slice(i)+ word.slice(0,i)
  scrollWord.push(tempWord)
 
}
scrollWord.push(word)
return scrollWord
}


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
if(numbers.length === 0){
  return [];
}
if(!numbers.every(a => typeof(a) == "number")){
  return numbers; 
}
numbers = numbers.sort ((a,b) => a-b);
return numbers[numbers.length -1]- numbers[0]; 

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
  let translatedString = []; 

  message = message.replaceAll(" ", "")
  for (let words of message) {
translatedString.push(dictionary[words.toUpperCase()]);
  
}
return translatedString.join(" ");

}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
