// Reverse string
// "I am the good boy" =>  "I ma eht doog yob"

function reverseString(str) {
  console.log(
    str
      .split(" ")
      .map((s) => s.split("").reverse().join(""))
      .join(" ")
  );
}

reverseString("I am the good boy");
