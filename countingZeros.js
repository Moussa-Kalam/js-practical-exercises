// Count number of zeros from 1 up to n

function countZeros(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }

  return str.split(0).length - 1;
}

console.log(countZeros(50));
