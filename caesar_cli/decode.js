function decode(str, shift = 0) {
  let answer = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ') {
      answer += ' ';
    } else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      answer += String.fromCodePoint(
        ((str.charCodeAt(i) - 65 + (26 - shift)) % 26) + 65
      );
    } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      answer += String.fromCodePoint(
        ((str.charCodeAt(i) - 97 + (26 - shift)) % 26) + 97
      );
    } else {
      answer += str[i];
    }
  }
  return answer;
}

module.exports = {
  decode
};
