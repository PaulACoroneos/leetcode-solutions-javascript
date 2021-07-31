function isMajorityElement(nums: number[], target: number): boolean {   
  let left = 0;
  let right = nums.length - 1;
  const half = Math.floor(nums.length / 2)
  
  while(left < right) {
      const mid = Math.floor((right + left) / 2)
      if(nums[mid] < target) {
          left = mid +1
      } 
      else {
          right = mid - 1
      }
  }
  return nums[left + half] === target
};