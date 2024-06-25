
let s = '16:01:00AM'

//recive and am or pm time - return military tme 

function timeConversion(s) {
  // Write your code here
 let timeAsArray = s.split(":")
  console.log(timeAsArray)

  for (let i=0; i< timeAsArray.length; i++){

    let timeMarker = timeAsArray[2]
    let finalTimeString = ""
    

    if (timeMarker.includes('A'||'a') && timeAsArray[0] === '12'){
     
      
      let newTimeString = "00:"+timeAsArray[1]+":"+timeMarker

      //console.log(newTimeString)

      let finalTimeString = newTimeString.slice(0, -2)
      console.log(finalTimeString)
      return finalTimeString
    }

    else if (timeMarker.includes('A'||'a') && timeAsArray[0] ===! '12'){
     
      let newTimeString = timeAsArray[0]+":"+timeAsArray[1]+":"+timeMarker
      
      
      //console.log(newTimeString)

      let finalTimeString = newTimeString.slice(0, -2)
      console.log(finalTimeString)
      return finalTimeString
    }

    return finalTimeString

  }

 return finalTimeString
}

timeConversion(s)
