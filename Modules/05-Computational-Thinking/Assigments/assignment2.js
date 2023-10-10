
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.

function perimeter(letter, num){
    const isSquare = letter === "s"
    const isCircle = letter === "c"

    const squarePerimeter = 4 * num
    const circlePerimeter = 6.28 * num

    return isSquare * squarePerimeter + isCircle * circlePerimeter;
}

console.log(perimeter("s", 7)) // 28

console.log(perimeter("c", 4)) // 25.12

console.log(perimeter("c", 9)) // 56.52