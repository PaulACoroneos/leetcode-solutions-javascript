function twoSum(nums: number[], target: number): number[] {
  //base optimization
  if(nums.length === 2) return [0,1];
  
  const hash = {};
  
  for(let idx =0; idx < nums.length; idx++) {
      const diff = target - nums[idx]
      if(hash.hasOwnProperty(diff)) {
          return [hash[diff],idx];
      }
      hash[nums[idx]] = idx;
  }
}