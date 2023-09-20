// Return the factorial of a provided integer.

// Only integers greater than or equal to zero will be supplied to the function as arguments.

function factorial(n){  
    let result = 1;
    for (let i = 1; i <= n; i++){
     result *= i; 
    }
    
    return result;
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)