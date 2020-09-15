// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
const upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts for password criteria
function generatePassword() {

  // Ask the user to select between 8-128 characters
  var charLength = prompt("Choose a length of at least 8 characters and no more than 128 characters. Type the number");

  if (charLength >= 8 && charLength <= 128) {
    return password
    console.log('character length is ' + charLength)

    let password
    var upperChar = confirm('Do you want uppercase characters? Ok (yes) Cancel (no)');
  
  
  

    

  // The input was outside of our range
  } else {
    alert("Number is out of the range. Please choose a number between 8 and 128")
    prompt("Choose a length of at least 8 characters and no more than 128 characters. Type the number");
  }
}


    

  
    






 

