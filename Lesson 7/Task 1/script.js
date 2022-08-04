function replicate(numberFake, timesFake) {
    let arr = [];
    function inner(number, times) {
        if (times < 1) {
            return arr;
        } else {
            arr.push(number);
            inner(number, times - 1);
        }
    };
    inner(numberFake, timesFake);
    return arr;
};

console.log(replicate(5, 3))
console.log(replicate(69, 1))
console.log(replicate(6, -2))
