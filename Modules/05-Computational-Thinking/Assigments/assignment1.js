function possibleBonus(currentPosition, friendPosition){
    // Check if both players are on the same tile
    if (currentPosition === friendPosition) {
        return false;
    }
    // Calculate the difference between positions
    const diceRoll = friendPosition - currentPosition
    
    // Check if the difference is within the range of 1 to 6
    return diceRoll >= 1 && diceRoll <= 6;
}


console.log(possibleBonus(3, 7)) // true
console.log(possibleBonus(1, 9)) // false
console.log(possibleBonus(5, 3)) // false