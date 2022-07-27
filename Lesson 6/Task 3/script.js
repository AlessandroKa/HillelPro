let sortWord = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
let checkAnagram = (firstWord, secondWord) => firstWord.trim() === secondWord.trim() ? false : sortWord(firstWord) === sortWord(secondWord);

console.log(checkAnagram("sLeEP", "speel"));
console.log(checkAnagram("sleep", "speel"));
console.log(checkAnagram("Hi", "Bye"));