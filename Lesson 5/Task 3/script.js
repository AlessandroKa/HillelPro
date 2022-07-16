function addNumber(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(addNumber(2, 4, 5))
console.log(addNumber(10, 45, 34, 130))