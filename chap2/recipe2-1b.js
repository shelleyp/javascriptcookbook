var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];

var over = nums.findIndex(function(element) {
  return (element >= 100);
});

console.log(nums[over]);
