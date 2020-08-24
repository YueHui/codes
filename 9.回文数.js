/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    const s = x.toString();
    for(let i=0;i<(s.length-1)/2;i++){
        if(s[i]!= s[s.length-1-i]){
            return false;
        }
    }
    return true;

    return x.toString() == x.toString().split('').reverse().join('');
    // let base = 10;
    // let num = 0;
    // while(num<x){
    //     num = (x%base)*(base/10);
    //     base*=10;
    //     console.log(num)
    // }
};
// @lc code=end

