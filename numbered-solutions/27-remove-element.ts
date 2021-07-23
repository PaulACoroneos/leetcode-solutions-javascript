function removeElement(nums: number[], val: number): number {
  //base case
  if(nums.length ===0 || nums.length === 1 && nums[0] === val) return 0;
  
  let ptra = 0;
  let ptrb = nums.length-1;
  
  while(ptra <= ptrb) {
      if (nums[ptra] === val) {
          if(nums[ptrb] !== val) {
              [nums[ptra++],nums[ptrb--]] = [nums[ptrb],nums[ptra]]
          }
          else {
              ptrb--;
          }
      }
      else {
          ptra++;
      }
  }
  return ptra;

};