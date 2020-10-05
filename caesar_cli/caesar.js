const { cipherRun } = require('./transform');
const { checkArgv } = require('./checkArgv');

const fs = require('fs');
const { action, shift, input, output } = checkArgv(process.argv);

if (input === 'stdin') {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    const cipher = cipherRun(action, chunk.toString(), shift);
    if (output === 'stdout') {
      process.stdout.write(`stdout: ${cipher}`);
    } else {
      fs.appendFile(output, cipher, err => {
        if (err) console.error('Error:', err);
      });
    }
  });
} else {
  fs.readFile(input, 'utf8', (error, data) => {
    if (error) {
      console.error('Error:', 'an input file not found');
      throw new Error('an input file not found');
    }

    const cipher = cipherRun(action, data, shift);

    if (output === 'stdout') {
      process.stdout.write(`stdout: ${cipher}`);
    } else {
      fs.appendFile(output, cipher, err => {
        if (err) console.error('Error:', err);
      });
    }
  });
}
