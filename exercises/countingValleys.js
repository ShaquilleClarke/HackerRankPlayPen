
const countingValleys = (steps, path) => {
    let valley = 0, seaLevel = valley;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') seaLevel += 1;
        else seaLevel -= 1;

        if (path[i] === "U" && seaLevel === 0) valley += 1;

    }
    return valley;
}
console.log(countingValleys(12, 'DDUUDDUDUUUD'));