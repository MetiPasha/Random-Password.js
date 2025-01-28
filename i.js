const passLength = 8;
const includeUppercase = true;
const includeLowercase = true;
const includeSymbols = true;
const includeNumbers = true;

function createRandomPassword(
  passLength,
  includeUppercase,
  includeLowercase,
  includeSymbols,
  includeNumbers
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%^&*_-=+"; // inaro biroone function ham mishe tarif kard
  const numbers = "0123456789";

  let allowedChars = "";
  let password = ""; // moteqyer hayii k meqdare khalii string migiran ta por beshan ba vooroodia

  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeSymbols ? symbols : "";
  allowedChars += includeNumbers ? numbers : "";

  if (passLength <= 0) {
    return "you must put 8 char";
  }
  if (allowedChars.length === 0) {
    return "you need to select something";
  }

  for (let i = 0; i < passLength; i++) {
    const random = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[random];
  }

  return password;
}
const password = createRandomPassword(
  passLength,
  includeUppercase,
  includeLowercase,
  includeSymbols,
  includeNumbers
);
console.log(`creatPass: ${password}`);
