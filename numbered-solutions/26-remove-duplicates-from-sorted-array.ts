function removeDuplicates(nums: number[]): number {
  //base cases
  if (nums.length <= 1) return;
  
  let ptra = 0, ptrb = 1;
  
  //iterate second pointer to end of array
  while(ptrb < nums.length) {
      //move ptrb until ptra and ptrb values dont match
      if(nums[ptra] === nums[ptrb]) {
          ptrb++
      }
      //when difference is found increment ptra and set its value to the new value at ptrb
      else {
          nums[++ptra] = nums[ptrb];
      }
  }
  
  //return left pointer which points to last unique number + 1 which is array length
  return ptra+1;
  
};