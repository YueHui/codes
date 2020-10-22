/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const m = s.trim();
    if(m.length === 0){
        return 0;
    }
    let wordArray = m.split(' ');
    return wordArray[wordArray.length-1].length;
};
// @lc code=end

// console.log(lengthOfLastWord("Hello World"));