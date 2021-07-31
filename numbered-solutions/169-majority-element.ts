//o(n)/o(n/2) sol'n
function majorityElement(nums: number[]): number {
  //base case
  if(nums.length <3) return nums[0];
  
  const hashMap = {};
  
  for (let i =0; i < nums.length; i++) {
      const val = nums[i]
      if(hashMap[val]) {
          hashMap[val]++;
          if(hashMap[val] > nums.length/2)
              return val;
      }
      else {
          hashMap[val] = 1;
      }
  }
  
};