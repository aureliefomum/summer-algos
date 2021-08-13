/*
Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force...

Parameters
Will receive a string of words or phrases

Returns
Will return the number of vowels added up 

Examples:
IN: "banana"
OUT: 3
IN: "banana, apple"
OUT: 5
*/
//  SOLUTIONS:
//1)
let example1 = "banana"
let example2 = "banana, apple"

function countVowels(string) {
    let counter = 0
    string.toLowerCase().split("").map(el => {
        if (el === "a" || el === "e"  || el === "i" || el === "o"  || el === "u"){
            counter++
        }
    })
    console.log(counter)
}
console.log(countVowels(example1)) //expect 3
console.log(countVowels(example2))  //expect 5

// 2)
function countVowelsRefactor(string) {
    let counter = 0
    let map = ["a", "e", "i", "o", "u"]
    string.toLowerCase().split("").map(el => {
        if (map.includes(el)){
            counter++
        }
    })
    return(counter)
}





