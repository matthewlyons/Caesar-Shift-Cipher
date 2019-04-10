export const caesarShift = (str, amount) => {
  if (amount < 0) return caesarShift(str, amount + 26);
  var output = "";
  for (let c of str) {
    if (c.match(/[a-z]/i)) {
      var code = c.charCodeAt();
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    output += c;
  }
  return output;
};
