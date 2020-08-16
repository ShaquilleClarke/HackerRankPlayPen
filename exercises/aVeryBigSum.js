// Sum the elements within an array of integers

const aVeryBigSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(aVeryBigSum([1, 2, 3]))
