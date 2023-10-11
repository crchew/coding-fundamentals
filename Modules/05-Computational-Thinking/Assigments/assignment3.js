function determineAncestor(x, y) {
    if (x === 1) {
        return y === "m" ? "father" : "mother";
    } else if (x === 2) {
        return y === "m" ? "grandfather" : "grandmother";
    } else {
        return "great " + "grand" + determineAncestor(x - 2, y);
    }
}

function determineDescendant(x, y) {
    if (x === 1) {
        return y === "m" ? "son" : "daughter";
    } else if (x === 2) {
        return y === "m" ? "grandson" : "granddaughter";
    } else {
        return "great " + "grand" + determineDescendant(x - 2, y);
    }
    }

function generation(x, y){
    if (x === 0) {
        return "me!";
      } else if (x < 0) {
        return determineAncestor(-x, y);
      } else {
        return determineDescendant(x, y);
      }
    }

console.log(generation(2, "f")); // Output: "granddaughter"
console.log(generation(-3, "m")); // Output: "great grandfather"
console.log(generation(1, "f")); // Output: "daughter"
console.log(generation(0, "m")); // Output: "me!"
console.log(generation(3, "m"));



