var arrayPairSum = function(nums) {
    return nums.sort((a,b)=>a-b).reduce((sm,nm,id) => sm + ( !(id%2) ? nm :0),0);
};
