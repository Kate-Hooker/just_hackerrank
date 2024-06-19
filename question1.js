const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];


// build a function that maps and adds each hourglass
// compare to current hghest hourglss and replace if hgher 
// move to next number

// loop over array adding in groups of 3 




function hourglassSum(arr) {
  // Write your code here
  // let biggestHourglass = 0
  // let array = [];
  // array = arr;

  //add first three numbers, compare to biggestHourglass,return i++
// break when last number in the equation is 6
  for (let i=0; i>array[0].length ; i++){
   
    let firstHourglass = array[0][0] + array[0][1] + array[0][2]
    let secondHourglass = array[0][3] + array[0][1] + array[0][2]
    let thirdHourglass = array[0][4] + array[0][3] + array[0][2]
    let fourthHourglass = array[0][3] + array[0][4] + array[0][5]

 let arrayOfTotals = [firstHourglass, secondHourglass, thirdHourglass, fourthHourglass]
  console.log(arrayOfTotals)
 let largestElement = 0

 /*for (let i = 0; i < arrayOfTotals.length; i++) {
  if (arrayOfTotals[i] > largestElement) {
      largestElement = arrayOfTotals[i];
  }
} */

return arrayOfTotals;

  }
}

const result = hourglassSum(arr);
console.log(result);