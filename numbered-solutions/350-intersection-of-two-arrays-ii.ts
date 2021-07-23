function intersect(nums1: number[], nums2: number[]): number[] {
  const hashA = {};
  
  if(nums1.length > nums2.length) return intersect(nums2,nums1);
  
  for(const num of nums1) {
      if(hashA[num]) hashA[num]++;
      else hashA[num] = 1;
  }
  
  const intersection = [];
  
  nums2.forEach(num => {
      if(hashA[num]) {
          intersection.push(num);
          hashA[num]--;
      }
  })
  
  return intersection;
};