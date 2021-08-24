// Given an array of items, reverse the order.

function reverseArr(arr){
  let newArr=[]
for(let i=arr.length-1;i>=0;i--){

newArr.push(arr[i])
}

return newArr
}


function reverseArr(arr){
  for (let i =0; i<arr.length/2;i++){
      let temp=arr[i]
      arr[i]= arr[arr.length-1-i]
      arr[arr.length-1-i] = temp
  }
  return arr

}