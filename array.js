var arr = [1,2,3,4,5,6,7,8]

// for (var i = 0; i < (arr.length/2); i ++){
//     var temp = arr[i]
//     arr[i] = arr[arr.length-1-i]
//     arr[arr.length -1 -i] = temp
// }

//console.log(arr.reverse())
var arr2 = [5, 10, 45, 23]
var arr3 = arr.concat(arr2)
console.log(arr3)

var a = [1, 2]
var b = Array.from(a)

b[0] = 5

console.log(a)