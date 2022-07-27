function findDaysInMonth(monthStr, year) {
    const month = new Date(monthStr + "-1-01").getMonth() + 1;
    return new Date(year, month, 0).getDate();
}


console.log(`The Month has ${findDaysInMonth('February', 2012)} days`) // "The Month has 29 days"
console.log(`The Month has ${findDaysInMonth('February', 2013)} days`) // "The Month has 28 days"
console.log(`The Month has ${findDaysInMonth('April', 2012)} days`) // "The Month has 30 days"
