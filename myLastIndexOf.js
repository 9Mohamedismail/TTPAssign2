const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

function myLastIndexOf(arr, target) {
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(myLastIndexOf(animals, "Dodo"));
// 3
