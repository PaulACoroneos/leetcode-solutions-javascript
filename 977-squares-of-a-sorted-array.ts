function sortedSquares(nums: number[]): number[] {
  const sortedArr = [];

  let leftPtr = 0;
  let rightPtr = nums.length-1;
  
  while(leftPtr <= rightPtr) {
      if(Math.pow(nums[leftPtr],2) > Math.pow(nums[rightPtr],2)) {
          sortedArr.unshift(Math.pow(nums[leftPtr],2))
          leftPtr++
      } else {
          sortedArr.unshift(Math.pow(nums[rightPtr],2))
          rightPtr--
      }
  }
  
  return sortedArr;
  
};