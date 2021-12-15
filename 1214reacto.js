//Fibonacci Numbers

function fib(n){
    let dp = {}
    dp[0] = 0
    dp[1] = 1
    let i = 2
    while (i < n){
      dp[i+2] = dp[i] + dp[i+1]
      i ++
    } 
    return dp[n-1]
  }
  
  function fib2(n){
    let res = [0,1]
    let count = 2
    while (count < n){
      temp = res[1] 
      res[1] = res[0] + res[1]
      res[0] = temp
      count ++
    } 
    return res[1]
  }
  
  console.log(fib2(6))
  
  //follow-up -- CoinChange 
  
  function findCoin(amount, coinList){
    //for any amount fewest = { amount - num coin } , memo in an object
    for (let coin of coinList){
      findCoin(coin, coinList) = 1
    } 
     // the amount of the coins 
    res = new Set() 
  
    for (let coin of coinList){
      res.add(findCoin(amount - coin, coinList)+1)
    }
    if (!res) return -1
    else{
      return Math.min(res)
      } 
  }
  // Note: the above is not enturely correct.
  
  //solution: https://gist.github.com/Stannie-Lim/057a7ed3c6ae61e9d0fd62f8c4b69964