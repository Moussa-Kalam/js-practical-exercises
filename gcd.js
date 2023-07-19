// Get the greatest common divisor of two numbers

function gcd(a, b) {
  if (b > a) [a, b] = [b, a];

  let result = 0;
  for (let i = 1; i <= a; i++) if (a % i === 0 && b % i === 0) result = i;

  return result;
}

console.log(gcd(10, 1));
console.log(gcd(25, 15));
console.log(gcd(28, 49));
