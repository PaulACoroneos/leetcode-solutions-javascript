function singleNumber(nums: number[]): number {
    
  //base optimization
  if(nums.length === 1) return nums[0];
  
  const hash = {};
  
  nums.forEach(num => {
      if(hash[num]) {
          hash[num]++;
      }
      else {
          hash[num] = 1;
      }
  });
  
  return parseInt(Object.keys(hash).find(key => hash[key] === 1));
  
};

//XOR method
function singleNumber(nums: number[]): number {
    
  //base optimization
  if(nums.length === 1) return nums[0];
  
  let singleNum = 0;
  
  for(const num of nums) {
      singleNum = singleNum^num;
  }
  
  return singleNum;
  
};
