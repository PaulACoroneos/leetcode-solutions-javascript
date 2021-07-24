//try 1
// const comparator = (logA:string,logB:string) => {
//   const [identA,...restA] = logA.split(' ');
//   const [identB, ...restB] = logB.split(' ');
//   const valA = restA.join(' ');
//   const valB = restB.join(' ');
   
//   const isValAInteger = Number.isInteger(parseInt(valA));
  
//   const isValBInteger = Number.isInteger(parseInt(valB));
  
  
//   //case 1. both numbers
//   if(isValAInteger && isValBInteger) {
//       return 0;
// }

//   //case2. 1 digit 1 letter
//   if(!isValAInteger && isValBInteger ) {
//       return -1;
//   }

//   if(isValAInteger && !isValBInteger ) {
//       return 1;
//   }

//   const logCompare = valA.localeCompare(valB); 
  
//   //case 3. identical letter log
//   if(logCompare === 0) {
//       return identA.localeCompare(identB)
//   }
  
//   //case 4. 2 letter different letter log
//   return logCompare;
// }


// function reorderLogFiles(logs: string[]): string[] {
//   return logs.sort(comparator);
  
// };

//try 2.

const comparator = (logA:string,logB:string) => {
  const valA = logA.slice(logA.indexOf(' ')+1)
  const valB = logB.slice(logB.indexOf(' ')+1);
   
  const isValAInteger = Number.isInteger(parseInt(valA));
  
  const isValBInteger = Number.isInteger(parseInt(valB));
  
  
  //case 1. both numbers
  if(isValAInteger && isValBInteger) {
      return 0;
}

  //case2. 1 digit 1 letter
  if(!isValAInteger && isValBInteger ) {
      return -1;
  }

  if(isValAInteger && !isValBInteger ) {
      return 1;
  }

  const logCompare = valA.localeCompare(valB); 
  
  //case 3. identical letter log
  const identA = logA.split(' ',1)[0];
  const identB = logB.split(' ',1)[0];
  
  if(logCompare === 0) {
      return identA.localeCompare(identB)
  }
  
  //case 4. 2 letter different letter log
  return logCompare;
}


function reorderLogFiles(logs: string[]): string[] {
  return logs.sort(comparator);
  
};