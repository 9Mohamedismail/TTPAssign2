const student = {
  firstname: "John",
  lastname: "Doe",
  age: 22,
  gender: "male",
};

function grabKeys(object) {
  let arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}

console.log(grabKeys(student));
// ['firstname', 'lastname', 'age', 'gender']
