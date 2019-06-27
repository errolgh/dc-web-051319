// console.log(cerealData.length)
// console.log(cerealData.map(cereal=>cereal.name))
/*
cerealData.filter((cereal)=>{
	let letter
	for(var key in manufacturers) {
        if(manufacturers[key] === "Quaker") {
            letter = key
        }
    }
	return cereal.mfr === letter
})  .map(cereal => cereal.name)
*/
// cerealData.find((cereal)=>{return cereal.calories > 80 && cereal.calories < 100})
// cerealData.filter((cereal)=>{return cereal.calories > 80 && cereal.calories < 100})

// console.log(
//
//   cerealData.reduce( (acc, currentCereal) =>currentCereal.rating + acc , 0)
//
// )

//cerealData.reduce( (acc, currentCereal) =>currentCereal.rating + acc , 0) / cerealData.length



function compareFunction(firstEl, secondEl){
  return secondEl.name.localeCompare(firstEl.name)
}

console.log(

  cerealData.sort( compareFunction  )

)



//return a single number


// console.log("connected")
// // console.log("cereal data is loaded");
// // console.log(cerealData)
//
// //callbacks: iterators, addEventListener, fetch
//
// var array = [1, 2, 3]
//
// // var newArray = array.map(timesTwo)
// function timesTwo(num){
//   return num * 2
// }
// // console.log(newArray)
// function getNegative(num){
//   return -num
// }
//
// //map works with an array and takes in a callback func
// //return a new array
// function myMapper(arr, callback){
//   let newArray = []
//   for(let i=0; i<arr.length; i++){
//     newArray.push( callback( arr[i] ))
//   }
//   return newArray
// }
//
// var mappedArray = myMapper([3, 7, 9], timesTwo)
// // console.log(mappedArray)
//
//
// const isGreaterThanThree = function(x){ return x > 3 }
//
// //built your own filter
// function myFilter(arr, callback){
//   let newArray = []
//   for(let el of arr){ //el = 1, 2, 3, 4, 5, 6
//     if( callback(el) ){ //isGreaterThanThree(4) == true
//       newArray.push(el)
//     }
//   }
//   return newArray
// }
//
// filteredArray = myFilter([1,2,3,4,5,6], isGreaterThanThree)
// /*should return [4,5,6]*/
// // console.log(filteredArray)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //[6, 7, 8].map(callback)
// document.addEventListener("click", function(e){console.log(e.target)})
//
// /* function addEventListener(type, callback){
//  logic here if(type === "click"){
//
// }
// if (type == "keyup"){
//
// }
//
//
// create an event object
// let currentEvent
//
// callback(currentEvent)
//
// }*/
