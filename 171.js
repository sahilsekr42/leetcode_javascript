/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let reversedTitle = columnTitle.split("").reverse().join("");
    let result = 0;let power = 0;
    for(let c of reversedTitle){
        result += (c.charCodeAt(0) - 64) * Math.pow(26, power++);
    }
    return result;
};

//titleToNumber("ABZ");