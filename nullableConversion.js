/** Write a function that check if any of the properties
 * in the object contains null or undefined
 */

const person = {
  name: "Moussa",
  age: undefined,
  childrenNum: null,
};

function nullableConversion(obj) {
  for (let item in obj) {
    if (obj[item] === undefined) obj[item] = "";
    if (obj[item] === null) obj[item] = 0;
  }
  return obj;
}

console.log(nullableConversion(person));
