let arr = [1,5,3,4,2]

// for loop - at each loop turn arr[i] into a zero and add all numbers

function miniMaxSum(arr) {
  let totalsArray = [] 


  function sortNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
  
}
 
sortNums(arr)

 // Write your code here
  for (let i = 0; i<arr.length; i++){
    
    let roundTotal = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]-arr[i]
    totalsArray.push(roundTotal)
    
  }

  console.log(totalsArray[4]+' '+totalsArray[0])

  return 

}
miniMaxSum(arr)


