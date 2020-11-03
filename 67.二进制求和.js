/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const bigger = Math.max(a.length,b.length);
    let result = '';
    let grow = 0;
    for(let i=0;i<bigger;i++){
        const indexA = a.length-1-i;
        const indexB = b.length-1-i;
        let r = parseInt(indexA>=0?a[indexA]:0) + parseInt(indexB>=0?b[indexB]:0) + grow;
        if(r>1){
            if(r>2){
                r=1;
            }else{
                r = 0;
            }
            grow = 1;
        }else{
            
            grow = 0;
        }

        result = r+result;
        if(i==bigger-1&&grow){
            result = 1+result;
        }
    }
    return result;
};
// @lc code=end

// console.log(addBinary("1111","1111"));