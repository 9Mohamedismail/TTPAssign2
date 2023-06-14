const array = [1, 2, 3, 4];

function myReduce(arr, callBack) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a = callBack(arr[i], a);
  }
  return a;
}

console.log(myReduce(array, (x, y) => x + y));
// 10
