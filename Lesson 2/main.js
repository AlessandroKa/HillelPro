let name = prompt('What is your name?').trim();
let surname = prompt('What is your surname?').trim();
let email = prompt('What is your email?').replaceAll(" ", "").toLowerCase();
let age = new Date().getFullYear() - prompt('Your year of birth').replaceAll(" ", "");

if (!email.includes("@")) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.startsWith("@")) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.endsWith("@")) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

document.write(`
    <ul>
        <li>Full name: ${name} ${surname}</li>
        <li>Email: ${email}</li>
        <li>Age: ${age}</li>
    </ul>
`);

console.log(age);
console.log(email);
console.log(surname);