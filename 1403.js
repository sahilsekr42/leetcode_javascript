/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let sum = nums.reduce((sum,num)=>sum+num,0);
    nums.sort((a,b)=>b-a);let chek =0;
    for(let i = 0;i<nums.length;i++) {
        if((chek+nums[i]) <= (sum/2)){chek+=nums[i];}
        else{chek=i;break;}
    }
    
    return nums.slice(0,chek+1);
 };