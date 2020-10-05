function checkArgv(argv) {
  const a = argv.indexOf('-a');
  const action = argv.indexOf('--action');
  let resultAction;
  if (a !== -1) {
    resultAction = argv[a + 1];
  } else if (action !== -1) {
    resultAction = argv[action + 1];
  }
  if (!resultAction) {
    console.error('Error:', 'Action (-a, --action) are required.');
    throw new Error('Action (-a, --action) are required.');
  }

  const s = argv.indexOf('-s');
  const shift = argv.indexOf('--shift');
  let resultShift;
  if (s !== -1) {
    resultShift = Number(argv[s + 1]);
  } else if (shift !== -1) {
    resultShift = Number(argv[shift + 1]);
  }
  if (typeof resultShift !== 'number' || isNaN(resultShift)) {
    console.error('Error:', 'The shift (-s, --shift) are required.');
    throw new Error('The shift (-s, --shift) are required.');
  }

  const i = argv.indexOf('-i');
  const input = argv.indexOf('--input');
  let resultInput;
  if (i !== -1) {
    resultInput = argv[i + 1] ? argv[i + 1] : 'stdin';
  } else if (input !== -1) {
    resultInput = argv[input + 1] ? argv[input + 1] : 'stdin';
  } else {
    resultInput = 'stdin';
  }
  if (/^-/.test(resultInput)) {
    resultInput = 'stdin';
  }

  const o = argv.indexOf('-o');
  const output = argv.indexOf('--output');
  let resultOutput;
  if (o !== -1) {
    resultOutput = argv[o + 1] ? argv[o + 1] : 'stdout';
  } else if (output !== -1) {
    resultOutput = argv[output + 1] ? argv[output + 1] : 'stdout';
  } else {
    resultOutput = 'stdout';
  }
  if (/^-/.test(resultOutput)) {
    resultOutput = 'stdout';
  }

  return {
    action: resultAction,
    shift: resultShift,
    input: resultInput,
    output: resultOutput
  };
}

module.exports = {
  checkArgv
};
