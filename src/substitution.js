// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  

  function substitution(input, alphabet, encode = true) {
    if (typeof input != "string" || !alphabet || alphabet.length !=26){
    return false;
   }
   for(i = 0; i < alphabet.length; i++) {
    for(j = i + 1; j < alphabet.length; j++) {
      if (alphabet[i] === alphabet[j]) {
        return false;
      }
   
    }
  
  }
  const addAlpha = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < alphabet.length ; i++) {
    const alpha = alphabet[i];
    if(alphabet.indexOf(alpha) !== alphabet.lastIndexOf(alpha)) return result;
  }
  
  if(encode){
    result = "";
    for(let i = 0; i < input.length; i++){
      const encoder = input[i].toLowerCase();
      if(encoder === " ") result += encoder;
      else {
        const index = addAlpha.indexOf(encoder);
        result += alphabet.charAt(index)
      }
    }
  }
  else {
    result = "";
    for(let i = 0; i < input.length; i++){
      const decoder = input[i].toLowerCase();
      if(decoder === " ") result += decoder;
      else {
        const index = alphabet.indexOf(decoder);
        result += addAlpha.charAt(index);
      }
    }
  }
return result; 
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
