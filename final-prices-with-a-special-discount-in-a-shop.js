//In the name of Cross

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    let itemPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= itemPrice) {
        itemPrice -= prices[j];
        break;
      }
    }
    result.push(itemPrice);
  }

  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
