let massive1 = [3, 45, 23, 78, 34];
let massive2 = [4, 2, 34, 4, 12, 1];
let longestMassive = massive1.length <= massive2.length ? massive2 : massive1;
let massive3 = [];

for (let i = 0; i < longestMassive.length; i++) {
    let trueNumber = massive1[i] !== undefined ? massive1[i] : massive2[i];
    let result = massive1[i] * massive2[i]
    if (isNaN(result)) {
        massive3.push(trueNumber)
    } else {
        massive3.push(result)
    }
}

console.log(massive3);

