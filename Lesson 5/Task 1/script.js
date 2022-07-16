// Первый вариант через concat 


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newarr = [].concat(...arr);
console.log(newarr);

// Второй вариант через функции
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr2 = [];
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        arr2.push(arr[i][j]);
        //console.log(arr[i][j]);
    }
}


console.log(arr2);