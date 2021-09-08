// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// From: https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/

// SOLUTION (Eucladian algorithm)

function highestCommonDiv(num1, num2){
    if(num2===0){
        return num1
    }else{
        return highestCommonDiv(num2, num1 % num2)
    }
 
 
 
 }