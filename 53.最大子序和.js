/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    for(let i=0;i<nums.length;i++){
        let tempResult = nums[i];
        if(tempResult>result){
            result = tempResult;
        }
        for(let j=i+1;j<nums.length;j++){
            tempResult = tempResult+nums[j]
            if(tempResult > result){
                result = tempResult;
            }
        }
    }
    return result;
};
// @lc code=end

// console.log(maxSubArray([-2,1]));