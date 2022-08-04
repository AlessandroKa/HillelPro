function specialMultiply(x, y) {
    if (y) {
        return x * y;
    } else {
        return function (y) {
            return x * y;
        };
    }
}

console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....