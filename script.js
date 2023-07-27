// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let arrayAlphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrayAlphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arrayNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let arraySpecialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~'];
let passwordLength = "";
let passwordReturn = "";
let passwordElements = "";
let builtArray = [];



function generatePassword() {

  passwordLength = (prompt("How many characters do you want in your password? Hint: Between 8 and 128 characters."))
  
  //Loop back to start if input is less than 8 or greater than 128
  //display alert to let user know number has to be within 8-128  
  if (passwordLength < 8 || passwordLength > 128) { 
    alert("Your password must be between 8 and 128 characters");
    return generatePassword();
  }
  
  if (confirm("Do you want your password to contain lower case letters?")) {
    builtArray = [...builtArray, ...arrayAlphabetLower];
  }

  if (confirm("Do you want your password to contain UPPER CASE letters?")) {
    builtArray = [...builtArray, ...arrayAlphabetUpper];
  }

  if (confirm("Do you want your password to contain numbers?")) {
    builtArray = [...builtArray, ...arraySpecialCharacters];
  }

  if (confirm("Do you want your password to contain special characters? Examples: !, %, or $")) {
    builtArray = [...builtArray, ...arrayAlphabetUpper];
  }


  if (builtArray.length === 0) { 
    alert("You must select at least one character type to generate a password!");
    return generatePassword();
  }


  for (let i = 0; i < passwordLength; i++) {
    passwordElements += builtArray[Math.floor(Math.random()*builtArray.length)];
  }

    builtArray = [];
    return passwordElements;
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

