/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1,...nums2];
    newArr.sort((a,b) => a - b);
    let l = newArr.length
    if(l % 2 != 0) return newArr[Math.floor(l/2)];
    else return (newArr[l/2] + newArr[l/2-1]) / 2    
};
