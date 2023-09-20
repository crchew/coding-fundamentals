// Given an array of integers, find the sum of all integers. You can be assure that the array will only contain integers (both positive and negative).
function sum(numbersArray){
    let sumArray = 0

    for (i = 0; i < numbersArray.length; i++){
    sumArray += numbersArray[i];
    }
    
    return sumArray;
}
    
    // Test cases
    console.log(sum([1, 2, 3, 4]) === 10)
    console.log(sum([-3, 5, 19, -6]) === 15) 