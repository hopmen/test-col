var lang = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);

function getСolumnChars (number) {
  var result = ``;
  let zz = true;

  /*while (z) {
    if (lang.length > number) {
      result += lang[number % lang.length];
      zz = false;
    } else {
      number
    }
  }*/
  return result;
}

function getСolumnNumber (string) {
  let chars = string.split(``).reverse();
  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    result += lang.indexOf(chars[i]) + (26 ** i);
  }
  return result;
}

console.log(getСolumnNumber(`A`));



