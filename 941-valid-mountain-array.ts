function validMountainArray(arr: number[]): boolean {
  //base case
  if(arr.length < 3) return false;
  let maxVal = -1;
  let foundPeak = false;
  let peakCnt = 0;
  //Okay we are going to loop through entire array and keep increasing maxval until we decrease. At that point maxval should continue decreasing until end. If it does not it's not a mountain arr
  for(const num of arr) {
      //if max ever matches a number thats not a mountain
      if(maxVal === num)
          return false;
      //number increased and we did not find our peak yet
      else if (num > maxVal) {
          if(!foundPeak) {
              maxVal = num
          }
          //we found a higher number and we had already peaked :( not mountain
          else {
              return false;
          }
      }
      //handle decreasing cases, decrease maxVal as we scale down
      else {
          if(!foundPeak) {
              foundPeak=true;
          }
          maxVal = num;
          peakCnt++;
      }
  }
  return foundPeak && peakCnt !== arr.length-1;
};