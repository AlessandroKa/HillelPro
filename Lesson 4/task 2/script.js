let arr = [4, 2, 34, 4, 1, 12, 1, 4];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
};

console.log(newArr);