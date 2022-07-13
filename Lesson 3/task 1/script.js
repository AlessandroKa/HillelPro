let number = prompt("Enter the number");

let a = 0, b = 1, result;
let output = "";

for (let i = 0; i < number; i++) {
    output = output + a + ",";
    result = a + b;
    a = b;
    b = result;
}

console.log(output.replace(/.$/, ""));



