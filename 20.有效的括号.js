/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length == 0) return true;
    if(s.length%2 == 1){
        return false;
    }
    
    const dict = {
        ")":"(",
        "]":"[",
        "}":"{"
    };
    const array = [];
    for(let i=0;i<s.length;i++){
        if(!dict[s[i]]){
            array.push(s[i])
        }else if(dict[s[i]] == array[array.length-1]) {
            array.splice(array.length-1,1);
        }else{
            return false;
        }
    }
    return array.length == 0;
};
// @lc code=end


// console.log(isValid("()")); //true
// console.log(isValid("(]")); //false
// console.log(isValid("()[]{}")); //true
// console.log(isValid("([)]")); //false
// console.log(isValid("(([]){})")); //true
// console.log(isValid("{[]}")); //true
