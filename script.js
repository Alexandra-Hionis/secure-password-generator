// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts for password criteria
function generatePassword() {

  var charLength = prompt('Choose a length of at least 8 characters and no more than 128 characters. Type the number');

  while (length > 8 || length < 128) {
  
    // Make sure guess is within rage
    if(Number(charLength) === length) {
      console.log('Character length is: ' + charLength + '<br>');
    }

    else if(Number(charLength) > 128) {
      alert("Too high. Please pick a character length between 8 and 128 characters")
      prompt('Choose a length of at least 8 characters and no more than 128 characters. Type the number');
    }
  
    else if(Number(charLength) < 8) {
      alert("Too low. Please pick a character length between 8 and 128 characters")
      prompt('Choose a length of at least 8 characters and no more than 128 characters. Type the number');
    }


  }



























var upper = confirm('Do you want uppercase characters?');



var lower = confirm('Do you want lowercase characters?');


var specialChar = confirm('Do you want to include numbers?');


var specialChar = confirm('Do you want to include special characters?');
 

}