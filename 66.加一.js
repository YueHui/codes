/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]+1 < 10){
            digits[i] +=1;
            break;
        }else{
            digits[i] = 0;
            if(i==0){
                digits.splice(0,0,1);
            }
        }
    }
    return digits;
};
// @lc code=end

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
// console.log(plusOne([9]))
// console.log(plusOne([9,9]))