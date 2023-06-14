const numbers = [1, 2, 3, 4, 5];

function mySome(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(mySome(numbers, (n) => n % 2 === 0));
// true
