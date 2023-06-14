const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

function grabKeys(object) {
  let arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}

console.log(grabKeys(car));
// ["Toyota", "Corolla", 2020]
