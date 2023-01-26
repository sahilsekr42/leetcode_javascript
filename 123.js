/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
  
    // Special case: Empty prices array
    if (n === 0) {
      return 0;
    }
  
    // Initialize variables to track the maximum profit after each transaction
    let buy1 = -prices[0];
    let sell1 = 0;
    let buy2 = -prices[0];
    let sell2 = 0;
  
    for (let i = 1; i < n; i++) {
      // Calculate the maximum profit after the first buy/sell transaction
      buy1 = Math.max(buy1, -prices[i]);
      sell1 = Math.max(sell1, buy1 + prices[i]);
  
      // Calculate the maximum profit after the second buy/sell transaction
      buy2 = Math.max(buy2, sell1 - prices[i]);
      sell2 = Math.max(sell2, buy2 + prices[i]);
    }
  
    // Return the maximum profit after the second sell transaction
    return sell2;
  };
  