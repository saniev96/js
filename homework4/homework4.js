"use strict";
// 1.Задание
let stringOne = "ток токарь стоковый исток слиток листок";
let str = "ток";
let count = 0;
let foundCount = stringOne.indexOf(str);
while (foundCount !== -1) {
  foundCount = stringOne.indexOf(str, (foundCount + 1));
  count++;
}
console.log(count);

// 3.Задание
let word = "hello";
let word2 = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
console.log(word2);

// 4.Задание
let sentence = "Its a very interesting sentence";
let arrFromSentence = sentence.split(" ");
let maxWord = "";

for (let i = 0; i < arrFromSentence.length; i++) {
  if (arrFromSentence[i].length > maxWord.length) {
    maxWord = arrFromSentence[i];
  }
}
console.log(maxWord);