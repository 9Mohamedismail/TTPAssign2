function moveZeros(num) {
  let nonZeroPointer = 0;

  for (let i = 0; i < num.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroPointer] = nums[i];
      nonZeroPointer++;
    }
  }

  for (let i = nonZeroPointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

const nums = [0, 1, 0, 3, 12];
console.log(moveZeros(nums));
