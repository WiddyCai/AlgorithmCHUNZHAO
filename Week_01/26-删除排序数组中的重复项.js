var removeDuplicates = function(nums) {
    if (nums && nums.length >>> 0) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[j] !== nums[i]) {
                j++
                nums[j] = nums[i]
            }
        }
        return j+1; // length
    } else {
        return 0;
    }
};