// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  let exchangedMoney = {};
  let objCoins = {
    "H":50,
    "Q":25,
    "D":10,
    "N":5,
    "P":1
  };
  let newCurrency = currency;
    
  if (currency >= 10000) {
    exchangedMoney.error = "You are rich, my friend! We don't have so much coins for exchange";
  } else {
    if (currency > 0) {
 
      for (key in objCoins) {
        if (newCurrency >= objCoins[key]) {
          exchangedMoney[key] = Math.floor(newCurrency / objCoins[key]);
          newCurrency = newCurrency % objCoins[key];
        }
        if (newCurrency === 0) {
          break;
        } else {
          continue;
        }
      }
    }
  }
  return exchangedMoney;
}
