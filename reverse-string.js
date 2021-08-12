// Given a string of characters as input, 
// write a function that returns it with the characters reversed. No 
// Reverse Method (well brute force it first, but then no reverse method)! 
	
// SOLUTIONS:
//1)
function stringReverser(str){
  let reversedStr = ''
  for(let i=str.length-1; i>=0;i--){
    reversedStr += str[i]
    }
  
   return reversedStr
  }
  
  console.log(stringReverser('abc'))//cba

    //2)
    function stringReverser(str){
      let reversedStr = ''
      for(let char of str){
        reversedStr = char + reversedStr
        }
      
       return reversedStr
      }

