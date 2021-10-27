function removeSpace(pass) {
  return pass.replace(" ", "");
}

function reverseText(pass) {
  return pass.split("").reverse().join("");
}

function updateVowels(pass) {
  pass = pass.toLowerCase().split("");
  for (let i = 0; i < pass.length; i++) {
    switch (pass[i]) {
      case "a":
        pass[i] = "b";
        break;
      case "i":
        pass[i] = "j";
        break;
      case "u":
        pass[i] = "v";
        break;
      case "e":
        pass[i] = "f";
        break;
      case "o":
        pass[i] = "p";
        break;
    }
  }

  return pass.join("");
}

var password = "dimitri w";
var noSpaces = removeSpace(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);
