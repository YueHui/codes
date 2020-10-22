/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
    // if(needle == "") return 0;
    // if(haystack.length<needle.length) return -1;
    // let index = -1;
    // let secondIndex = -1;
    // let startMatch = false;
    // let i = 0;
    // while(i<haystack.length){
    //     const s = haystack[i];
    //     if(s == needle[0]){
    //         index = index<0?i:index;
    //         startMatch = i;
    //     }
    //     //if(index>0 && ){}
    //     //i++;
    // }
    // return index;
};
// @lc code=end

// console.log(strStr("mississippi","issipi"))
// console.log(strStr("mississippi","issip"))
// console.log(strStr("hello","ll"))
// console.log(strStr("aaa","a"))
// console.log(strStr("a","a"))