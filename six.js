s = '11:01:00PM'


function timeConversion(s) {
  

  let timeArray = s.split("")
  let updatedTimeArray = []

  let afternoon = s.includes('P', 8)
  console.log(afternoon)
  console.log(timeArray)

  if(afternoon = true && s.includes('1', 0) == true && s.includes('2', 1) == true )
    {updatedTimeArray = timeArray
      console.log(updatedTimeArray)
    } /*
else if (timeArray.indexOf(8) === 'P') {
    let updatedTimeArray = s.match(/\w+/g)
    console.log(updatedTimeArray)
    return updatedTimeArray
  } */
    //break appart string
    // add 12, update and return

  console.log(updatedTimeArray)
  return 
}  

timeConversion(s)