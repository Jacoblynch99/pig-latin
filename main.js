'use strict';

const vowel = ['a', 'i' ,'o', 'e', 'u']
const vowelY = ['y']

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
const { exception } = require('console');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 

// const wordIntake = (word) => {
  
// }



const pigLatin = (word) => {
  let splitWord = word.toLowerCase().trim().split('') 
  
  if (vowel.includes(splitWord[0])) {
    return vowelFirst(splitWord)
  } else {
    return consonantFirst(splitWord)
  } 

}

const vowelFirst = (vowelWord) => {
  let vowelPig = vowelWord.join('') + 'yay'
  return vowelPig
}
 
const consonantFirst = (consonantWord) => {
  
  let consonantPig = consonantWord.join('')

  for (let i = 0; i < consonantPig.length; i++) {
    if (vowel.includes(consonantPig[i])) {
      return consonantPig.slice([i]) + consonantPig.slice(0, [i]) + 'ay';  
  }
}
  // if (vowel.includes(consonantPig[1])) {
  //  return consonantPig.slice(1) + consonantPig.slice(0, 1) + 'ay';
  // } else if ((vowel.includes(consonantPig[2]))) {
  //   return consonantPig.slice(2) + consonantPig.slice(0, 2) + 'ay';
  // } else if ((vowel.includes(consonantPig[3]))) {
  //   return consonantPig.slice(3) + consonantPig.slice(0, 3) + 'ay';
  // } else if ((vowel.includes(consonantPig[4]))) {
  //   return consonantPig.slice(4) + consonantPig.slice(0, 4) + 'ay';
  // }

// TODO
// create exception for y in pig latin when it is the vowel
//  += y || -= y
//  if the vowel exists at the end of the array
}












// const pigLatin = (word) => {


//   // if (splitWord === vowelArray)
  

// }

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.