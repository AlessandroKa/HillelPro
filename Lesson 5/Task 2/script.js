let findPalindrome = prompt('Write word of interest').toLowerCase();

function palindrome() {
    let arrPalindrome = findPalindrome.split('');
    let copyPalindrome = arrPalindrome.concat([]); // Создаем дубликат массива для метода reverse
    let intReverses = copyPalindrome.reverse();
    let truePalindrome = intReverses.join('')

    if (findPalindrome === truePalindrome) {
        alert(`${findPalindrome} is palindrome`);
        return true;
    } else {
        alert(`${findPalindrome} is not a palindrome`)
        return false;
    }
}

let bool = palindrome();
console.log(typeof bool)