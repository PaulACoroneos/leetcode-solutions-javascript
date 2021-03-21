/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  //fill in m backwards
  for(let i=nums1.length-1; i >= 0; i--) {
      if(n === 0) return;
      if(m === 0) {
          nums1[i] = nums2[n-1];
          n--;
      }
      else {          
          if(nums2[n-1] > nums1[m-1]) {
              nums1[i] = nums2[n-1];
              n--;
          }
          else {
              nums1[i] = nums1[m-1]
              m--;
          }
      }
  }
};