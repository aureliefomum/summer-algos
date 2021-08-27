// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// SOLUTIONS:
//1)
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  return stones.split('').filter(letter => jewels.includes(letter)).length
  
};


//2)
function checkJewels (jewels, stones){

  let count =0
  let cache={}
  
  for (let stone of stones){
    cache[stone] = cache[stone] +1 || 1    
    }
  for (let jewel of jewels){
    if(cache[jewel]){
      count += cache[jewel]      
    }
    
    }
  
  return count
  }


  //3)

  function checkJewels (jewels, stones){

    let count =0
    let cache={}
    for (let jewel of jewels){
      cache[jewel]=true        
      }
    
    for (let stone of stones){
      if(cache[stone]){
        count++
      }
    }
    return count
  }
  


