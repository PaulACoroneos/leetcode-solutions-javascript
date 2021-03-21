/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
  //base cases
  if (nums.length === 0) return 0;
  
  let evenCnt = 0;
  for(let num of nums) {
      let digitCnt = 0;
      while(Math.floor(num) > 0) {
          digitCnt++;
          num /= 10;
      }
      if(digitCnt % 2 === 0) evenCnt++;
  }
  return evenCnt;
};