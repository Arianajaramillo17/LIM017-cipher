const cipher = {
  encode: function (offset, message) {
    if ( offset == null || message == [] || offset == "0" || message == "0" ) {
      throw new TypeError('bad arguments');
    }
    let encodeMesg = ""; 
    let textChar = "";
    for (let i = 0; i < message.length; i++) {
      let letters = message[i];
      if (letters.match(/[a-z]/i)) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
           textChar = (message.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          encodeMesg += String.fromCharCode(textChar);
        }
        else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
         textChar = (message.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          encodeMesg += String.fromCharCode(textChar);
        }
      }
      else {
        encodeMesg += letters;
      }
    }
  
    return encodeMesg;

  },
  decode: (offset2, message2) => {
    if ( offset2 == null || message2 == [] || offset2 == "0" || message2 == "0" ) {
      throw new TypeError('bad arguments');
    }
    let decodeMesg = "";
    let textChar2 = "";
    for (let i = 0; i < message2.length; i++) {
      let letter2 = message2[i];

      if (letter2.match(/[a-z]/i)) {
        
        if (message2.charCodeAt(i) >= 65 && message2.charCodeAt(i) <= 90) {
           textChar2 = (message2.charCodeAt(i) + 65 - parseInt(offset2)) % 26 + 65;
          decodeMesg += String.fromCharCode(textChar2);
          
        } else if (message2.charCodeAt(i) >= 97 && message2.charCodeAt(i) <= 122) {
         textChar2 = ((message2.charCodeAt(i) - 97 - parseInt(offset2) + 52) % 26) + 97;
          decodeMesg += String.fromCharCode(textChar2);
        }



      } else {
        decodeMesg += letter2;
      }
    }
    //retornar respuesta
    return decodeMesg;
  }
  // ...
};

export default cipher;

