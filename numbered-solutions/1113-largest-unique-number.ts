function largestUniqueNumber(A: number[]): number {
  if (A.length === 0) return -1;
  if (A.length === 1) return A[0];
  
  const hashMap:Record<string,number> = {};
  
  //hash values into hashmap
  for(const num of A) {
      if(hashMap[num]) {
          hashMap[num]++;
      }
      else {
          hashMap[num] = 1;
      }
  }
  
  let largest = -1;
  Object.entries(hashMap).forEach(([key,val]) => {
      if(val === 1) {
          largest = Math.max(largest,parseInt(key));
      }
  })
  
  return largest;
  
};