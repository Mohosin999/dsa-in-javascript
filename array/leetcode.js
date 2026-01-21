const nums = [3, 2, 4];
const target = 6;

function twoSum(nums, target) {
  // Solution 1
  //   // for (let i = 0; i < nums.length; i++) {
  //   //   for (let j = i + 1; j < nums.length; j++) {
  //   //     if (nums[i] + nums[j] === target) {
  //   //       return [i, j];
  //   //     }
  //   //   }
  //   // }

  // Solution 2
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum(nums, target));
