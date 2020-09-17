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

function generatePassword() {

  // Prompt for password character length

  // Ask the user to select between 8-128 characters
  var charLength = prompt("Choose a length of at least 8 characters and no more than 128 characters. Type your number");
  var passwordLength = parseInt(charLength, 10); // Now charLength is a number!

    // Validate the user input
    if(charLength >= 8 && charLength <= 128) {
      console.log('length is ' + charLength + ' characters');

        // Confirms for other password criteria

          // Confirm upper case letters         
          var charUpper = confirm('Do you want uppercase characters? Ok (yes) Cancel (no)');
            
          // Ask if the user would like lowercase characters
          var charLower = confirm('Do you want lowercase characters? Ok (yes) Cancel (no)');

          // Ask if the user would like numbers
          var charNumbers = confirm('Do you want numbers? Ok (yes) Cancel (no)');

          // Ask if the user wants special characters
          var charSpecial = confirm('Do you want special characters? Ok (yes) Cancel (no)'); 
              
            if(charUpper === true || charLower === true  || charNumbers === true  || charSpecial === true) {

              // Randomly selects a choice from the uppercase array
              if (charUpper == true) {
                

                for (let i = 0; i < charLength; i++) { 
                  var upper = upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
                  console.log(upper);         
                }    
              }

              // Randomly selects a choice from the lowercase array
              if (charLower == true) {

                for (let i = 0; i < charLength; i++) { 
                var lower = lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]; 
                console.log(lower);
                }
              }

             // Randomly selects a choice from the numbers array
             if (charNumbers == true) {
              
              for (let i = 0; i < charLength; i++) { 
              var num = numericCharacters[Math.floor(Math.random() * numericCharacters.length)]; 
              console.log(num);
              }
             }

              // Randomly selects a choice from the special characters array
              if (charSpecial == true) {

                for (let i = 0; i < charLength; i++) { 
                var spec = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]; 
                console.log(spec);
                }
              }
              
            // Error message if selected cancel for all of the confirms
              } else {
                alert('Please select one of the password criteria');
              }
                     

   // Error message the input was outside of our range
  } else {
  alert("Number is out of the range. Please choose a number between 8 and 128");
  prompt("Choose a length of at least 8 characters and no more than 128 characters. Type your number");
  } 

  // Add one of each type of character to the password
var password = "";
var characterPool = [];

if (charUpper) {
  password += //get a random capital letter.
  characterPool.concat(upperCaseCharacters);
 }

 if (charLower) {
  password += //get a random capital letter.
  characterPool.concat(lowerCaseCharacters);
 }

 if (charNumbers) {
  password += //get a random capital letter.
  characterPool.concat(numericCharacters);
 }

 if (charSpecial) {
  password += //get a random capital letter.
  characterPool.concat(specialCharacters);
 }

 while (password < charLength) {
  password++;
  console.log('Password is: ' + password);



}


return password;
}  

 
    






 

