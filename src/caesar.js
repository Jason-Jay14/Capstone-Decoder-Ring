// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6




const caesarModule = (function () {
const ABC = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    const message = [];
    input = input.toLowerCase();
    if (shift === 0 || shift < -25 || shift > 25) 
      {return false}
    if (encode == false) {shift = -shift;}

    for (let i = 0; i < input.length; i++) {
      let character = input.charAt(i);
      if (!ABC.includes(character)) {message.push(character);
      } else {
        for (let j = 0; j < ABC.length; j++) {
          let align = j + 26 + shift;
          if (ABC.charAt(j) === character) {message.push(ABC.charAt(align))
            break;
          }
        }
      }
    }
    return message.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
