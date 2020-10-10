/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target);
    if(index>=0){
        return index;
    }
    for(let i=0;i<nums.length;i++){
        if(i== 0 && target<nums[i]){
            return i;
        }
        if(i== nums.length-1){
            return i+1;
        }
        if(nums[i]<target && nums[i+1]>target){
            nums.splice(i+1,0,target);
            return i+1;
        }
    }
};
// @lc code=end

// console.log(searchInsert([1,2,5,6],5));
// console.log(searchInsert([1,2,5,6],2));
// console.log(searchInsert([1,2,5,6],0));
// console.log(searchInsert([1,3,5,6],2));