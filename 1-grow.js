//Day 1/366 Coding Challenge
//Reduce but grow - https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Cara 1
function grow(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}

console.log(grow([1, 2, 3, 4]));

//Cara 2 (Function Declaration)
function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);
  return result;
}

console.log(grow([1, 2, 3, 4]));

//Cara 3 (Function Expression)
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4]));
