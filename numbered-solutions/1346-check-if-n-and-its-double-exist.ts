function checkIfExist(arr: number[]): boolean {
  //base case if length two and either number *2 equals the other return true
  if(arr.length === 2 && arr[0]*2 === arr[1] || arr[1]*2 == arr[0])
      return true;
  
  const hashTable = {};
  
  for(const num of arr) {
      //we dont care about idx for this problem. so just can store number itself and check for key that is current num/2 or if it's even check divisible by 2 (since we only have ints)
      if(hashTable.hasOwnProperty(num*2) || (num % 2 === 0 && hashTable[num/2])) 
          return true;
      else
          hashTable[num] = num;
  }
  
  //did not find matching criteria, return false
  return false;
};