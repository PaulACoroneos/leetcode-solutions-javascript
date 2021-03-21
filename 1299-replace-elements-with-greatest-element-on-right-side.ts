function replaceElements(arr: number[]): number[] {
  //base cases
  if(arr.length === 0) return arr;
  if(arr.length === 1) {
      arr[0] = -1;
      return arr;
  }
  
  const newArr = Array(arr.length).fill(0);
  let rollingMaxNum = arr[arr.length-1];
  
  newArr[arr.length-1] = -1;
  
  for(let ptra = arr.length-2; ptra >=0; ptra--) {
      rollingMaxNum = Math.max(rollingMaxNum,arr[ptra+1])
      newArr[ptra] = rollingMaxNum
  }
  return newArr;
};