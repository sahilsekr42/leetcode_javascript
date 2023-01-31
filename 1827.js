var minOperations = function(nums) {
    let n = nums.length, ans = maxi = 0;
    for(let i = 1 ; i < n ; i++){
        if(nums[i]<=nums[maxi]+i-maxi){ans+=nums[maxi]+i-maxi-nums[i];}
        else{maxi=i;}
    }
    return ans;
};