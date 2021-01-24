var moveZeroes = function(nums) {
    // return nums.sort((a,b) => b? 0: -1)
    let i = 0, j = 0; // 双指针
    while (i < nums.length) {
        if (nums[i] != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else {
            i++;
        }
    }
};