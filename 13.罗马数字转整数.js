/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    let result = 0;
    const values = s.split('');
    values.forEach((v,index)=>{
        //大于前面的数字则跳过
        // if(index>0 && dict[v]>dict[values[index-1]]){
        //     return;
        // }
        // if(index<values.length-1 && dict[v]<dict[values[index+1]]){
        //     result += (dict[values[index+1]] - dict[v]);
        // }else{
        //     result += dict[v];
        // }
        if(index<values.length-1 && dict[v]<dict[values[index+1]]){
            result -= dict[v];
        }else{
            result += dict[v];
        }
    })

    return result;
};
// @lc code=end

console.log(romanToInt("IV"));