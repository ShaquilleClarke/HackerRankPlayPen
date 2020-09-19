//Each integer in the array represents a sock color
// Find out how many matching pairs are in the array

// The function takes to paramaters: 
// n: the number of socks in the pile
// ar: the colors of each sock

// We need to count the pairs and return them

// Ex1: n = 7, ar = [1, 2, 1, 2, 1, 3, 2] => 2 pairs
// Ex2: n = 9, ar = [10, 20, 20, 10, 10, 30, 50, 10, 20] => 3 pairs

const sockMerchant = (n, ar) => {
    let key = {}, pairs = 0, arr = ar;

    for (let i  = 0; i < n; i++) {
        let val = arr[i]
        key[val] = (key[val] || 0) + 1;
        if (key[val] % 2 === 0) pairs++;
    }
    return pairs
}

// const sockMerchant = (ar) => {
//     let key = {}, pairs = 0, arr = ar;

//     for (val of arr) {
//         key[val] = (key[val] || 0) + 1;
//         if (key[val] % 2 === 0) pairs++;
//     }
//     console.log(pairs)
// }
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))

