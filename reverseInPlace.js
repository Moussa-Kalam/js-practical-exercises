// Reverse string
// "I am the good boy" =>  "I ma eht doog yob"

function reverseString(str) {
  return str
    .split(" ")
    .map((s) => s.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseString("I am the good boy"));
