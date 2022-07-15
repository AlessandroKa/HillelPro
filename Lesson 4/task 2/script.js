let arr = [4,2,34,4,1,12,1,4];

let uniq = [];
for (let item of arr) {
    uniq[item] = (uniq[item] || 0) + 1;
}
let arr2 = [];
for (let i in arr) {
    if (uniq[arr[i]] > 1) {
        arr2.push(arr[i]);
        uniq[arr[i]] = 0;
    }
}

console.log(arr2);
