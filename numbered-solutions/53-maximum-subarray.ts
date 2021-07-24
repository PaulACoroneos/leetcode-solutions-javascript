function maxSubArray(nums: number[]): number {
   
  //what we need to do here is apply greedy approach in that we want to try to find only sub arrays that have a sum >0. We can store max version of this.
  let maxSubArrayVal = nums[0];
  let currSubArrayVal = nums[0]
      //base case 
  if(nums.length === 1) return maxSubArrayVal;
  
  for(let i =1 ; i< nums.length; i++) {
      currSubArrayVal = Math.max(currSubArrayVal+ nums[i],nums[i]);
      maxSubArrayVal = Math.max(maxSubArrayVal,currSubArrayVal)

  }
  
  return maxSubArrayVal;
};