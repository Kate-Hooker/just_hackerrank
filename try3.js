const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];


function hourglassSum(arr) {
  // Write your code here
  let biggestHourglass = 0
  let array = [];
   array = arr;

  const [x,y] = array[0,0]


  function getMushroom([x,y]) {

      //check to see if a whole mushroom exists
      // fnd coordinates and add

    const mushroomCoordinates = [[x,y],[x+1,y],[x+2,y],[x+1,y+1],[x,y+2],[x+1,y+2],[x+2,y+2]]

    function checkForSpace([x,y]) {

      for (let i =0; i<= mushroomCoordinates.length; i++){
        let lengthOfCoords = mushroomCoordinates[i] 

      for (let j=0; j<= lengthOfCoords.length; j++){
        if (lengthOfCoords[0] || lengthOfCoords[1] == NaN) 
          {return ["No space"]}
        else {return ["Mushroom!"]}

      }
    }
  }
  checkForSpace([0,0])
  } 




  return largestElement;
  
}

const result = hourglassSum(arr);
console.log(result);