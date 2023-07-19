// Remove duplicate members from an array without Set
const duplicates = [1, 2, 3, 4, 1, 4, 6, 33, 33, 44, 46, 2, 3, 5, 6];

function removeDuplicates(arr) {
  // Empty array to get all the unique elements
  let uniqueElements = [];

  /** For each element of the array
   * if element is not in uniqueElements, add it
   * Return uniqueElements
   */
  arr.forEach((element) => {
    !uniqueElements.includes(element) && uniqueElements.push(element);
  });

  return uniqueElements;
}

console.log(removeDuplicates(duplicates));
