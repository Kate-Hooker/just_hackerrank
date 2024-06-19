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
   let array = [];
   array = arr;

  //add first three numbers, compare to biggestHourglass,return i++
// break when last number in the equation is 6
  for (let i=0; i>array[i].length ; i++){
   
    let firstHourglass = array[i][0] + array[i][1] + array[i][2] + array[i+1][1] + array[i+2][0] + array[i+2][1] + array[i+2][2] 
    let secondHourglass = array[i][3] + array[i][1] + array[i][2]
    let thirdHourglass = array[i][4] + array[i][3] + array[i][2]
    let fourthHourglass = array[i][3] + array[i][4] + array[i][5]

  let arrayOfTotals = [firstHourglass, secondHourglass, thirdHourglass, fourthHourglass]
  //console.log(arrayOfTotals)
  //console.log(firstHourglass)
  let largestElement = 0 

 for (let i = 0; i < arrayOfTotals.length; i++) {
  if (arrayOfTotals[i] > largestElement) {
      largestElement = arrayOfTotals[i];
  }
} 

}
return largestElement;

  
}

const result = hourglassSum(arr);
console.log(result);