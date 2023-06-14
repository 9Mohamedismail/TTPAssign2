const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function myFilter(arr, callBack) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}

console.log(myFilter(words, (n) => n.length > 6));
// [ 'exuberant', 'destruction', 'present' ]
