function arraySign(nums: number[]): number {
  return nums.reduce((accum,val) => {
     return Math.sign(val)*accum; 
  },1)
};