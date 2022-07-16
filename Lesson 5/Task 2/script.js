let findPalindrome = prompt('Write word of interest').toLowerCase();

function palindrome() {
    let arrPalindrome = findPalindrome.split('').reverse();
    let truePalindrome = arrPalindrome.join('')

    if (findPalindrome === truePalindrome) {
        alert(`${findPalindrome} is palindrome`);
        return true;
    } else {
        alert(`${findPalindrome} is not a palindrome`)
        return false;
    }
}

let bool = palindrome();
console.log(bool)