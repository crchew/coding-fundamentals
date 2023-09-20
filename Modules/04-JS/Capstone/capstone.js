function missingLetter(str) { 
  let startingLetter = str[0];
  let charCode = startingLetter.charCodeAt();
  let missingLetters = [];

  console.log(charCode)
  console.log(typeof(charCode))

  for (let i = 1; i < str.length; i++) {
    charCode++;
    if (str.charCodeAt(i) !== charCode) {
      while (charCode < str.charCodeAt(i)) {
        missingLetters.push(String.fromCharCode(charCode));
        charCode++;
      }
      }
    }
  
  if (missingLetters.length === 0) {
    return "undefined";
  }

  return missingLetters;

}
  
console.log(missingLetter("abce"));
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz") )