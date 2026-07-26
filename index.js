const greeting = "Привет, GIT!";
console.log(greeting);

function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

//Версия 1.0

function filter(arr, fn) {
  return arr.filter(fn);
}
const evens = filter([1, 2, 3, 4, 5], (n) => n % 2 === 0);
console.log(evens);
