/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    while(i<m+n){
        if(nums2[j]<nums1[i]){
            nums1.splice(i,0,nums2[j]);
            nums1.pop();
            j++;
        }
        i++;
    }
    if(j<=n-1){
        for(let i=j;i<=n-1;i++){
            nums1.pop();
            nums1.splice(m+n-(n-i),0,nums2[i]);
        }
    }
    return nums1;
};
// @lc code=end

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
// console.log(merge([0],1,[1],1))
// console.log(merge([2,0],1,[1],1))
// console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
