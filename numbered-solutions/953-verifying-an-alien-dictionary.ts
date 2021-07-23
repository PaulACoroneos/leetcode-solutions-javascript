function isAlienSorted(words: string[], order: string): boolean {
  //base case
  if(words.length <2) return true;
  
  for(let i =0; i < words.length-1; i++) {
      for(let j = 0; j < words[i].length; j++ ) {
          //first check if words actually differ
          if(words[i][j] !== words[i+1][j]) {
              //is letter in left word after letter in right word
              if(order.indexOf(words[i][j]) > order.indexOf(words[i+1][j]))             {
                  return false;
              }
              //if the letters are different but the left word letter comes before right letter word we are done
              break;
          }

      }
  }
  return true;
};