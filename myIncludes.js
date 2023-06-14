const numbers = [1, 2, 3, 4, 5];

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(numbers, 2));
// true
