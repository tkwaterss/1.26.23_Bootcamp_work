// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

//Solution #1

// this method is faulty because it requires that a value in the array is less
// than 0
    // let max = 0;
    // let min = 0;
    let max = array[0];
    let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    } else if (array[i] > max) {
        max = array[i];
    }
}
console.log(`The maximum value is ${max}`);
console.log(`The minimum value is ${min}`);

//Solution #2
let arrMax = array[0];
let arrMin = array[0];

for (let i = 1; i < array.length; i++) {
    arrMax = Math.max(arrMax, array[i]);
    arrMin = Math.min(arrMin, array[i]);
}
console.log(`The maximum value is ${arrMax}`);
console.log(`The minimum value is ${arrMin}`);

//Solution #3 - Brad Tolson
// let lowest = Math.min(...array);
// console.log('Lowest Number:' + lowest);
// let highest = Math.max(...array);
// console.log('Highest Number:' + highest);

//Solution #4 - BatuhanSundseth
// let min, max = array[0]
// for (i = 0; i <= array.length; i++) {
//   array[i] < min ? min = array[i] : (array[i] > max ? max = array [i] : min = min)
// }
// console.log("The smallest number is: " + min)
// console.log("The largest number is: " + max)

//Solution #5 - Lukas Nesittka (Instructor)
let top = array[0];
let bottom = array[0];

for(let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if(currentValue < min){
        console.log(`The current value ${currentValue} is lower than our current minimum ${min}`);
        min = currentValue;
    }
    if(currentValue > max){
        console.log(`The current value ${currentValue} is lower than our current minimum ${max}`);
        max = currentValue;
    }
}
console.log(`In the array ${array} the max value is ${max} and the min value is ${min}`);