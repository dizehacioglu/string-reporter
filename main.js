// Prompt the user to enter any word using the prompt function.
var userInput = prompt("Please enter a word:");

// Report back information in a single alert dialog about the word they entered. Use variables and string concatenation (+) to combine string values to be alerted. charAt, toLowerCase, toUpperCase, and substring are string functions.

alert(
	"You entered: " + userInput + 
	"\nThere are " + userInput.length + " characters in the word." + 
	"\nThe third character is " + userInput[2] + 
	"\nLowercase: " + userInput.toLowerCase() + 
	"\nUppercase: " + userInput.toUpperCase() +
	"\nExample: I have wanted a " + userInput + " since I was a little boy.\nSubword: " + userInput.substr(1, 3)
);