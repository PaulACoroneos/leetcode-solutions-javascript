//brute force
function generateParenthesis(n: number): string[] {
  const queue: string[] = [""];
  const ans: string[] = [];

  const isValid = (str:string) => {
      let leftCount = 0;
      for(let i =0 ; i < str.length; i++) {
          str[i] === "(" ? leftCount++ : leftCount--;
          if(leftCount < 0) return false;
      }
      return leftCount === 0;
  }

  while(queue.length) {
      const str = queue.shift();
      if(str?.length === 2*n ) {
          if(isValid(str)) {
              ans.push(str);
          }
          continue;
      }
      queue.push(str + "(", str + ")");
  }
  return ans;
};

//backtracking
function generateParenthesisBacktracking(n: number): string[] {
  const ans: string[] = [];

  const backtracking = (curStr: string, leftCount: number, rightCount: number) => {
      //base case. if a string made it to length 2n by now it's valid.
      if (curStr.length === 2 * n) {
          ans.push(curStr);
          return;
      }
      if (leftCount < n) {
          backtracking(curStr + "(", leftCount + 1, rightCount)
      }
      if (rightCount < leftCount) {
          backtracking(curStr + ")", leftCount, rightCount + 1)
      }
  }

  backtracking("", 0, 0);
  return ans;
};