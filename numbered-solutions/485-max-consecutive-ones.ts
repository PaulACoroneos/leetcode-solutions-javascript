/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0;
  let rollingCount = 0;
  
  //base cases
  if (nums.length === 0) return maxCount;
  if (nums.length === 1) return nums[0];
  
  for(const num of nums) {
      if(num === 1) {
          rollingCount++;
          if( rollingCount > maxCount) {
              maxCount++;
          }
      }
      else
          rollingCount = 0;
  }
  
  return maxCount;
};