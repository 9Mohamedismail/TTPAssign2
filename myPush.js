const animals = ['pigs', 'goats', 'sheep'];

function myPush(arr, target) {
    arr[arr.length] = target;
    return arr.length;
}

const count = myPush(animals, "cows");
console.log(count);
// 4
console.log(animals);
// [ 'pigs', 'goats', 'sheep', 'cows' ]
