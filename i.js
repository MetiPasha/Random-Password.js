const passLength = 8; // Desired length of the password
const includeUppercase = true; // Whether to include uppercase letters
const includeLowercase = true; // Whether to include lowercase letters
const includeSymbols = true; // Whether to include symbols
const includeNumbers = true; // Whether to include numbers

function createRandomPassword(
  passLength,
  includeUppercase,
  includeLowercase,
  includeSymbols,
  includeNumbers
) {
  // Define character sets for each type of character
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%^&*_-=+"; // You can also define this as a function if needed
  const numbers = "0123456789";

  let allowedChars = ""; // String to hold all allowed characters based on user preferences
  let password = ""; // Variable to store the generated password

  // Add character sets to allowedChars based on user preferences
  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeSymbols ? symbols : "";
  allowedChars += includeNumbers ? numbers : "";

  // Validate password length
  if (passLength <= 0) {
    return "Password length must be greater than 0";
  }

  // Validate that at least one character set is selected
  if (allowedChars.length === 0) {
    return "You must select at least one character type";
  }

  // Generate the password by randomly selecting characters from allowedChars
  for (let i = 0; i < passLength; i++) {
    const random = Math.floor(Math.random() * allowedChars.length); // Get a random index
    password += allowedChars[random]; // Append the character at the random index to the password
  }

  return password; // Return the generated password
}

// Call the function to create a random password
const password = createRandomPassword(
  passLength,
  includeUppercase,
  includeLowercase,
  includeSymbols,
  includeNumbers
);

// Output the generated password
console.log(`Generated Password: ${password}`);
