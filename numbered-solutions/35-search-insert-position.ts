//2 ptr
function searchInsert(nums: number[], target: number): number {
  //case 1. target is less or greater than array ends or Array sized 1 and it's the target val
  if(target < nums[0] || nums.length === 1 && nums[0] === target) {
      return 0;
  }
  if(target > nums[nums.length-1]) {
      return nums.length;
  }
  
  let ptrA=0;
  
  while (ptrA+1 < nums.length) {
      //case 2. One of pointers is target
      if (nums[ptrA+1] === target) {
          return ptrA+1;
      }
      else if (nums[ptrA] === target) {
          return ptrA;
      }
      //case 3. second pointer is less ptrb but greater than ptrA
      else if (nums[ptrA+1] > target && target > nums[ptrA] ) {
          return ptrA+1;
      }
      ptrA++;
  }
  
};
