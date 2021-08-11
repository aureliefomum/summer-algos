// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
// it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
// });
// });

// SOLUTION:
//1)
function maxCharacter(str){
    let charKeys ={}
    
    for (let char of str){
      if(charKeys[char]){
        charKeys[char]++
        }else{
          charKeys[char]=1
         }   
      }
   let maxNum = 0
   let maxChar= ''

   for (let x in charKeys){
     if(charKeys[x] > maxNum) {
         maxNum = charKeys[x]
         maxChar = x
     }
     }
     return maxChar
   }

   
//2)
function maxCharacter(str){
    let charKeys ={}
    
    for (let char of str){
      if(charKeys[char]){
        charKeys[char]++
        }else{
          charKeys[char]=1
         }   
      }
   let maxNum = Math.max(...Object.keys(charKeys).map(el => charKeys[el]))
   for (let x in charKeys){
     if(charKeys[x]===maxNum) return x
     }
   }