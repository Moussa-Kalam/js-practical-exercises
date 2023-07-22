// Count number of zeros from 1 up to n

function countZeros(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }

  // return str.split(0).length - 1;
  return str.match(/0/g).length;
}

console.log(countZeros(10000000));
