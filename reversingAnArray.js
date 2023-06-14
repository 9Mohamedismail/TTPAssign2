function reverseArray(array) {
  let reversedArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    let swap = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = swap;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// [5, 4, 3, 2, 1]
