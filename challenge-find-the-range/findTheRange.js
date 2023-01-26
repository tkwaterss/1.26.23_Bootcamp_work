// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

//Solution #1
    let max = 0;
    let min = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    } else if (array[i] > max) {
        max = array[i];
    }
}
console.log(max,min);

//Solution #2
let arrMax = array[0];
let arrMin = array[0];

for (let i = 1; i < array.length; i++) {
    arrMax = Math.max(arrMax, array[i]);
    arrMin = Math.min(arrMin, array[i]);
}
console.log(arrMax, arrMin);