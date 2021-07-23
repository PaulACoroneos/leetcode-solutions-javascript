//brute force

// function maxProfit(prices: number[]): number {
//   let maxProfit = 0;
//   //base case
//   if(prices.length < 2 ) return maxProfit;
  
//   for(let i = 0; i< prices.length;i++) {
//       for(let j=i+1; j< prices.length; j++) {
//           maxProfit = Math.max(maxProfit,prices[j]-prices[i])
//       }
//   }
  
//   return maxProfit
// };

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  
  //base case
  if(prices.length < 2 ) return maxProfit;
  
  for(let i = 0; i< prices.length;i++) {
      if(prices[i] < minPrice) {
          minPrice = prices[i];
      }
      else if (prices[i] - minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice;
      }
  }
  
  return maxProfit
};