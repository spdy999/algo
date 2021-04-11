const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);
console.log(factorial(3));
console.log(`this is fac(3): ${factorial(3)}`);
module.exports = {
  factorial,
};
