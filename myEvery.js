const numbers = [1, 30, 39, 29, 10, 13];

function myEvery(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(myEvery(numbers, (n) => n < 40));
// true
