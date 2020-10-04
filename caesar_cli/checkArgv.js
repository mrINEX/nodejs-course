function checkArgc(argv) {
  const a = argv.indexOf('-a');
  const action = argv.indexOf('--action');
  let resultAction;
  if (a !== -1) {
    resultAction = argv[a + 1];
  } else if (action !== -1) {
    resultAction = argv[action + 1];
  }

  const s = argv.indexOf('-s');
  const shift = argv.indexOf('--shift');
  let resultShift;
  if (s !== -1) {
    resultShift = Number(argv[s + 1]);
  } else if (shift !== -1) {
    resultShift = Number(argv[shift + 1]);
  } else {
    resultShift = 0;
  }

  const i = argv.indexOf('-i');
  const input = argv.indexOf('--input');
  let resultInput;
  if (i !== -1) {
    resultInput = argv[i + 1];
  } else if (input !== -1) {
    resultInput = argv[input + 1];
  } else {
    console.log('else input');
    resultInput = 'input.txt';
  }

  const o = argv.indexOf('-o');
  const output = argv.indexOf('--output');
  let resultOutput;
  if (o !== -1) {
    resultOutput = argv[o + 1];
  } else if (output !== -1) {
    resultOutput = argv[output + 1];
  } else {
    console.log('else output');
    resultOutput = 'output.txt';
  }

  return {
    action: resultAction,
    shift: resultShift,
    input: resultInput,
    output: resultOutput
  };
}

module.exports = {
  checkArgc
};
