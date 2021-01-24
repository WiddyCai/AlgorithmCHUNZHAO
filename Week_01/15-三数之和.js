/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let length = nums.length;
    if (length < 3) {
        return []
    }
    let res = []
    nums.sort((a, b) => a - b) // 从小到大排序
    if (nums[0] > 0 || nums[length - 1] < 0) {
        return res
    } else {
        for (let i = 0; i < length; ++i) {
            if (nums[i] > 0) break; // 左侧大于0，跳出
            if (i > 0 && nums[i] == nums[i-1]) continue; // 避免重复解
            let L = i + 1
            let R = length - 1
            while (L < R) { // 左指针 要比 右指针 小
                if (nums[i] + nums[L] + nums[R] == 0) {
                    res.push([nums[i], nums[L], nums[R]])
                    // 提前避免重复解
                    while (L < R && nums[L] == nums[L+1]) { ++L };
                    while (L < R && nums[R] == nums[R-1]) { --R };
                    // 找下一组
                    ++L
                    --R
                } else if (nums[i] + nums[L] + nums[R] > 0) { // nums[R] 太大 左移
                    --R
                } else { // nums[L] 太小 右移
                    ++L
                }
            }
        }
    }
    return res
};