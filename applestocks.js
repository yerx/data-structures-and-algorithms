function getMaxProfit(stockPrices) {
  // if there are fewer than 2 items in the array, throw an error
  if (stockPrices.length < 2) {
    throw new Error(
      "Error. There are fewer than 2 items in the stockPrices array"
    );
  }

  // declare variable for minimum Price
  let minPrice = stockPrices[0];

  // declare variable for max profit and set equal to difference in the second and first item in the array
  let maxProfit = stockPrices[1] - stockPrices[0];

  // iterate through the array starting at index 1
  for (let i = 1; i < stockPrices.length; i++) {
    // declare variable current price set equal to array index 1
    let currentPrice = stockPrices[i];
    // find the potential profit set equal to current price - minimum Price
    let potentialProfit = currentPrice - minPrice;

    // take the maximum of max profit and potential profit
    maxProfit = Math.max(maxProfit, potentialProfit);
    // take the minimum of the min Price and current price
    minPrice = Math.min(minPrice, currentPrice);
  }

  // return the max profit
  return maxProfit;
}

// test cases
const arr1 = [4, 2, 5];
console.log(getMaxProfit(arr1));
