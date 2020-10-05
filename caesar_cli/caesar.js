const { cipherRun } = require('./cipher');
const { checkArgv } = require('./checkArgv');

const fs = require('fs');
const { action, shift, input, output } = checkArgv(process.argv);
console.log(action, shift, input, output);

fs.readFile(input, 'utf8', (error, data) => {
  if (error) console.error('Error:', error);

  const cipher = cipherRun(action, data, shift);

  fs.appendFile(output, cipher, err => {
    if (err) console.error('Error:', err);
  });
});

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });
