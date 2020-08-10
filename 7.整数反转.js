/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = x.toString();
    let m='';
    for(let i=y.length-1;i>=0;i--){
        m+=y[i]
    }
    m = parseInt(m);
    x<0?m=-m:null;
    if(m>Math.pow(2,31)-1 || m<-Math.pow(2,31)){
        return 0;
    }
    return m;
};
// @lc code=end

