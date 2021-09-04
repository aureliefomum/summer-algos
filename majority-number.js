// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



// Hint:  HASH MAP PATTERN! and possibly sorting for nlogn :)

// From: https://leetcode.com/problems/majority-element/

// SOLUTION:

function majorityElement(arr){
  let numsCount={}

  for(let num of arr){
      if (numsCount[num]){
        numsCount[num]++
      }else{
        numsCount[num]=1
      }

  }
   
  let majorityNum = ""
  let highestNum = 0

  for(let x in numsCount){
      if (numsCount[x] > highestNum){
        majorityNum = x
            highestNum = numsCount[x]

      }
  }
    return majorityNum

}