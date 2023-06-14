function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(sumArray) {
  let sum = 0;
  sumArray.forEach((n) => {
    sum += n;
  });
  return sum;
}

console.log(range(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// 55
