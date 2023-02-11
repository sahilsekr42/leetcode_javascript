function findUnsortedSubarray(nums) {
    let a = 100001;
    let b;
  
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] >= nums[i - 1]) {
        continue;
      } else {
        a = Math.min(a, nums[i]);
        b = i;
        nums[i] = nums[i - 1];
      }
    }
  
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > a) {
        a = i - 1;
        break;
      }
    }
  
    if(a !== 100001) {
      return b - a;
    } else {
      return 0;
    }
  }
  