/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || !strs[0]) return "";
    
    // let result = "";
    // for(let i=0;i<strs[0].length;i++){
    //     let char = strs[0][i];
    //     let flag = true;
    //     strs.forEach(s=>{
    //         if(s[i] !== char){
    //             flag = false;
    //         }
    //     })
    //     if(flag){
    //         result+= char;
    //     }else{
    //         break;
    //     }
    // }
    // return result;
    
    //v2.0
    let result = strs[0];
    for(let i=1;i<strs.length;i++){
        result = getSame(result,strs[i])
        if(!result) return result || "";
    }

    return result || "";

    function getSame(str1,str2){
        for(let i=0;i<str1.length;i++){
            if(str1[i] !== str2[i]){
                return str1.substring(0,i);
            }
        }
        return str1;
    }
};
// @lc code=end

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["c","c"]));