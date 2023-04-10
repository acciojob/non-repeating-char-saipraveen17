function findFirstNonRepeatingChar(str) {
  // Create a dictionary to count the occurrences of each character in the string
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate through the string again and return the first character that has a count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Prompt the user for input and call the function
const inputStr = prompt("Enter a string:");
const result = findFirstNonRepeatingChar(inputStr); 
alert(result);
