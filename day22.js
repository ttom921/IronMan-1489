var nums = [3,3]
var target = 6

var twoSum = function(nums, target) {
    for (var i = 1; i < target ; i++)
    if (nums.indexOf(i) + 1 && nums.indexOf(target - i) + 1) {
       return [nums.indexOf(i), nums.indexOf(target - i)]
    } else {
		if( i == target - 1) {
		  return console.log("Sorry")
        }       
    }
};
console.log(twoSum);