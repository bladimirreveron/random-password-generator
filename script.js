var passwordLenght = 8;
var choiceArray = [];

var specialCharacters = ["!",",","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    
    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLenght; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
    return password;
}





function getPrompts(){
  choiceArray = [];
  passwordLenght = parseInt(prompt("How many characters do you want your password to be? (8 - 12 characters)"));

  if(isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
      alert("Character lenght has to be a number, 8 to 128 digits. Please, try again.");
      return false;
  }
  if (confirm("Would you like lowercase letter in your password?")) {
      choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like uppercase letter in your password?")) {
      choiceArray = choiceArray.concat(upperCaseArray);
}
  if (confirm("Would you like special characters in your password?")) {
      choiceArray = choiceArray.concat(specialCharacters);
}
  if (confirm("Would you like numbers in your password?")) {
      choiceArray = choiceArray.concat(numberArray);
}
return true;
}