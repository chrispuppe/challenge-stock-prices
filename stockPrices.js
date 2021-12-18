const stockPrices = [15, 10, 20, 22, 1, 9]

function best(arr) {
    let maxProfit = 0
    for (let i = 1; i < arr.length;i++) {
        // console.log(arr[i], 'outer')
        for (let n = 0; n < i;n++) {
            let current = arr[i]
            let end = arr[n]
            let profit = current - end
            // console.log(current, '-', end, profit)
            if (maxProfit < (profit)) {
                maxProfit = profit
                // console.log(maxProfit)                
            }
        }
    }
    return maxProfit
}

console.log(best(stockPrices))