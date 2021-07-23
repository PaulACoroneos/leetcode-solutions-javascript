function sortArrayByParity(A: number[]): number[] {
  if(A.length === 1) return A;
  
  let lastEvenNumIdx = 0;
  
  for(let i = 0; i < A.length; i++) {
      if(A[i] % 2 === 0) {
          [A[lastEvenNumIdx++],A[i]] = [A[i],A[lastEvenNumIdx]]
      }
  }
  
  return A;
};