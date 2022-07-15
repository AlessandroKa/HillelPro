// Вариант первый простой как 5 копеек, но эффективный :)

// let word = prompt('Write your word here');
// let letter = prompt('Write the letter you want to find the amount of');
// let findLetter = (word.split(letter).length - 1);
// console.log(`The string contains the following number of ${letter} letter: ${findLetter}`);

// Вариант второй посложнее, но зато используем цикл

let word = prompt('Write your word here').split('');
let letter = prompt('Write the letter you want to find the amount of');
let y = 0;

for (let i = 0; i < word.length; i++) {
    word[i] === letter ? y++ :        
    }

console.log(`The string contains the following number of ${letter} letter: ${y}`);