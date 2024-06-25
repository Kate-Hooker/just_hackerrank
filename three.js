let arr = [1, 1, 0, -1, -2, -6];

function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] > 0) {
      positiveNumbers++;
    } else {
      negativeNumbers++;
    }
  }

  let total = arr.length;
  let ratioArray = [
    (positiveNumbers / total).toFixed(6),
    (negativeNumbers / total).toFixed(6),
    (zeroCount / total).toFixed(6)
  ];

  for (let i = 0; i < ratioArray.length; i++) {
    console.log(ratioArray[i]);
    if (i === 2) {
      break;
    }
  }
}

// Call the function
plusMinus(arr);
