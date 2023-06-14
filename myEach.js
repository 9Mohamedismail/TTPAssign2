const numbers = [1, 2, 3, 4, 5];

function myEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}

myEach(numbers, (n) => console.log(n * 2));
/*
2
4
6
8
10
*/
