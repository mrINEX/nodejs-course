const { encode } = require('./encode');
const { decode } = require('./decode');
const { checkArgc } = require('./checkArgv');

const fs = require('fs');
const { action, shift, input, output } = checkArgc(process.argv);

if (action || shift) {
  fs.readFile(input, 'utf8', (error, data) => {
    if (error) throw error;

    let cipher;
    if (action === 'encode') {
      cipher = encode(data, shift);
    }
    if (action === 'decode') {
      cipher = decode(data, shift);
    }

    fs.appendFile(output, cipher, err => {
      if (err) throw err;
    });
  });
} else {
  throw 'Action (-a, --action: an action encode/decode) and the shift (-s, --shift: a shift) are required.';
}
