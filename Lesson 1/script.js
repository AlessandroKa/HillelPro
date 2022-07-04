//task 1 (Calculator)

const count = 7;
console.log('Значение: ' + count);
console.log('Квадрат этого значения: ' + count ** 2);
console.log('Куб этого значения: ' + count ** 3);

//task 2 (temperature converter)

const tempCelsium = 25;
let tempFahrenheit = tempCelsium * 9 / 5 + 32;
console.log(tempCelsium + '\u00B0' + 'C' + ' равно ' + tempFahrenheit + '\u00B0' + 'F')
let editCelsium = ((tempFahrenheit - 32) * 5) / 9
console.log(tempFahrenheit + '\u00B0' + 'F' + ' равно ' + editCelsium + '\u00B0' + 'C')