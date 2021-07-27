function maxProfit(prices: number[]): number {
  let profit = 0;
  
  for(let i =1; i < prices.length; i++) {
      const delta = prices[i]-prices[i-1];
      profit = Math.max(delta+ profit,profit)
  }
  return profit;
};