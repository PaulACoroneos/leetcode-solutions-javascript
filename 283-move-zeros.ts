/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  //base case
  if(nums.length === 1) return;
  
  let lastNonZeroIdx = 0;
  //copy non-zero numbers to front of array
  for(let idxPtr=0 ; idxPtr < nums.length; idxPtr++) {
      if (nums[idxPtr] !== 0) {
          [nums[lastNonZeroIdx++],nums[idxPtr]] = [nums[idxPtr],nums[lastNonZeroIdx]];
      }
  }
  
};