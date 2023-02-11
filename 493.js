/**
 * @param {number[]} nums
 * @return {number}
 */

var reversePairs = function(nums) {
    let ans = 0;
  
    function mergeSort( p, r) {
      if (p >= r) {
        return;
      }
  
      if (p < r) {
        
        let q = Math.floor((p + r) / 2);
        let  m = p;
        let n = q + 1;
        
        mergeSort( p, q);
        mergeSort( q + 1, r);
        while (m <= q && n <= r) {
        if (nums[m] > 2 * nums[n]) {
          ans += q + 1 - m;
          n++;
        } else {
          m++;
        }
      }
        merge( p, q, r);
        
      }
    }
  
    function merge( p, q, r) {
      
      let temp = [];
      let  m = p;
      let n = q + 1;
  while (m <= q && n <= r) {
    if (nums[m] > nums[n]) {
      temp.push(nums[n++]);
    } else {
      temp.push(nums[m++]);
    }
  }
  while (m <= q) {
    temp.push(nums[m++]);
  }
  while (n <= r) {
    temp.push(nums[n++]);
  }
  for (let i = p; i <= r; i++) {
    nums[i] = temp[i - p];
  }
  
    }
  
    if (nums.length === 0) {
      return 0;
    }
  
    mergeSort( 0, nums.length - 1);
  
    return ans;
  }
  
  
  
  
  
  
  