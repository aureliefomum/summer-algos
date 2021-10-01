// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// SOLUTION:

function ransom(note, magazine){
  let hash={}
  let magArr = magazine.split(" ")
  
  for (let i=0;i<magArr.length;i++){
    if(!hash[magArr[i]]){
      hash[magArr[i]] =1 
      }else{
        hash[magArr[i]]++
        
        } 
    
    }
    let noteArr = note.split("")
    let possible = true
    
    noteArr.forEach(word=>{
      if(hash[word]){
        hash[word]--;
        
      if(hash[word]< 0)
      possible =false
        } else possible = false;
      
      });
      
      return possible
  }

//2)
const canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1)
    } else {
      map.set(magazine[i], 1)
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
      return false;
    }
    map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
  }

  return true;
};
  