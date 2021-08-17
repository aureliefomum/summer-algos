// Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

//SOLUTION
//1)
function reverseWords(str) {
  let revWords = []
  let newArr = str.split(" ")
  newArr.forEach(word=>{
    let currentWord =''
    for(let i=word.length-1;i>=0; i--){
    currentWord += word[i]    
    }
    revWords.push(currentWord)
  })
  
  return revWords.join(' ')
}

  



