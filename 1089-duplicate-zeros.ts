/**
 Do not return anything, modify arr in-place instead.
 */
 function duplicateZeros(arr: number[]): void {
  let length = arr.length;
  let zeroCnt = 0;
  //count zeros
  for(let i =0; i < length - zeroCnt; i++) {
      if(arr[i] === 0) {
          //is zero at very end (?)
          if(i === length - 1 - zeroCnt ) {
              arr[length-1] = 0;
              //we dont need to set end of array anyore
              length--;
          }
          else {
              zeroCnt++;
          }
      }
  }
  let copyIdx = length - zeroCnt-1  ;

  for(let i = length-1 ; i > 0; i--) {
      if(arr[copyIdx] === 0) {
          //we know we need to duplicate the zero, might as well set previous idx at same time
          arr[i] =0;
          arr[i-1] = 0;
          i--;
      }
      //not a zero, just copy non-zero value
      else {
          arr[i] = arr[copyIdx]
      }
      copyIdx--;
  }
};