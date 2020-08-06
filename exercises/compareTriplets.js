// Compare the scores between Alice and Bob
//a = [1, 2, 3], b = [3, 2, 1]


// Award points to each individual depending on who contains the higher score in each index
// if a[i] > b[i] => alice earns 1 point
// else if b[i] > a[i] => bob earns 1 point
// We do nothing if the indices are equal


// We must return the results within an array. 
// return [1, 1] 


// Use the weave method to push each score into an array, compare each index to one another, then increment points array


// ^^^^^
// We did not need to weave

const compareTriplets = (a, b) => {
    const points = [0, 0]; 

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) points[0]++;
        else if (a[i] !== b[i]) points[1]++;
    }

    return points;
}



console.log(compareTriplets([5, 8, 7], [3, 6, 10]))
