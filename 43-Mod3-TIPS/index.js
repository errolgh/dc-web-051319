/*Problem
Have an array of subarrays
each subarray is filled with random numbers
Get the different between the largest and smallest in each subarray
Try to get the sum of all those difference

Input: [[], [], []]
Output: Integer

Edge cases? Assumes all are valid NUMBERS, no emtyp arrays

Solution

*/
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
function findSortedCheckSum(array){
  let differences = []
  for(let i = 0; i<array.length; i++){
    array[i].sort((a,b) => a-b)
    differences.push(
      //largest value              //smallest value
      array[i][array[i].length - 1] - array[i][0]
    )
  }
  return differences.reduce((a,b)=>a+b)
}

function findMathCheckSum(array){
  let differences = []
  for(let i = 0; i<array.length; i++){
    differences.push(Math.max(...array[i]) - Math.min(...array[i]))
  }
  return differences.reduce((a,b)=>a+b)
}
//Math.max solution: 1894.775146484375ms WITHOUT REDUCE
//Math.max solution: 1973.710205078125ms


//local variable called sum
//iterate through each subarray,
//get max value using Math.max and get min value using Math.min
//subtract the max and min in each subarray
//and return the sum of the differences









//
