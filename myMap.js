const numbers = [1, 2, 3, 4, 5];

function myMap(arr, callBack) {
  let mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(callBack(arr[i]));
  }
  return mapArr;
}

console.log(myMap(numbers, (n) => n * 2));
// [ 2, 4, 6, 8, 10 ]
