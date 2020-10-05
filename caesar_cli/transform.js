const { encode } = require('./encode');
const { decode } = require('./decode');

function cipherRun(action, data, shift) {
  if (action === 'encode') {
    return encode(data, shift);
  } else if (action === 'decode') {
    return decode(data, shift);
  }
  console.error('Error:', `Action was "${action}" but need (encode/decode).`);
  throw new Error('Action (encode/decode) are required.');
}

module.exports = {
  cipherRun
};
