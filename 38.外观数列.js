/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1) return "1";
    let value = "1";
    for(let i=1;i<n;i++){
        value = getDescribe(value);
    }

    return value;

    function getDescribe(number){
        const numberStr = number.toString();
        let result = '';
        let numCount = 0;
        let numName = '0';
        for(let i=0;i<numberStr.length;i++){
            if(numberStr[i] != numName){
                if(numName != 0){
                    result += numCount;
                    result += numName;
                }
                
                numCount = 0;
                numName = numberStr[i];
            }
            numCount+=1;
            if(i==numberStr.length-1){
                result += numCount;
                result += numName;
            }
        }
        return result;
    }
};
// @lc code=end

// console.log(countAndSay(5))

