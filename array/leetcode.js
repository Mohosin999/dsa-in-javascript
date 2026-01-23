/**
 * Problem - 01
 */
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

twoSum(nums, target);

/**
 * Problem - 02
 */
const string = ["flower", "flow", "flight"];

function longestStack(strs) {
  if (strs.length === 0) return "";

  // Prothom string-ke prefix dhore nichi
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Jotokkhon porjonto prefix-ti strs[i] er shuru-te pawa na jachhe
    while (strs[i].indexOf(prefix) !== 0) {
      // Prefix-er shesh theke ekta character komachhi
      prefix = prefix.substring(0, prefix.length - 1);

      // Jodi prefix empty hoye jay, tar mane kono common kichu nei
      if (prefix === "") return "";
    }
  }

  return prefix;
}

const r = longestStack(string);

console.log(r);
