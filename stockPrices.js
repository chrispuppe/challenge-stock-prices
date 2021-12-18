const stockPrices = [15, 10, 20, 22, 1, 9]
const stockPrices2 = [1, 2, 3, 4, 5]
const stockPrices3 = [2, 3, 10, 6, 4, 8, 1]
const stockPrices4 = [7, 9, 5, 6, 3, 2]
const stockPrices5 = [0, 100]
const stockPrices6 = [23, 4, 456, 23, 567, 7, 4532, 5, 45647, 4]

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
console.log(best(stockPrices2))
console.log(best(stockPrices3))
console.log(best(stockPrices4))
console.log(best(stockPrices5))
console.log(best(stockPrices6))