/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let v = 0,v1,v2;
    for(let i=0;i<prices.length;i++){
        let p1 = prices[i];
        for(let j=i+1;j<prices.length;j++){
            let p2 = prices[j];
            if(p2-p1>v){
                v1 = p1;
                v2 = p2;
                v = p2-p1;
            }
        }
    }
    console.log(`${v1}买入，${v2}卖出，利润:${v}`)
    return v;
};
// @lc code=end

