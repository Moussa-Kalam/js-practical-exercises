/**
 * Write a function that sorts an array of products
 * based on their prices in ascending order
 */

const productList = [
  { name: "Apple", price: 15 },
  { name: "Water", price: 10 },
  { name: "Mango", price: 12 },
  { name: "Pineapple", price: 18 },
];

function sortProducts(products) {
  return products.sort((a, b) => a.price - b.price);
}

console.log(sortProducts(productList));
