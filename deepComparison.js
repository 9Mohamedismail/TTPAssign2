function deepEqual(objectOne, objectTwo) {
  if (!objectOne || !objectTwo) {
    return false;
  }

  if (objectOne === objectTwo) {
    return true;
  }

  const keysObjectA = Object.keys(objectOne);
  const keysObjectB = Object.keys(objectTwo);

  if (keysObjectA.length !== keysObjectB.length) {
    return false;
  }

  for (let key of keysObjectA) {
    if (
      !keysObjectB.includes(key) ||
      !deepEqual(objectOne[key], objectTwo[key])
    ) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// true
