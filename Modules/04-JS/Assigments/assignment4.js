function tetra(n){  
    if (n < 0){
     return "invalid output"
    }

    return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)