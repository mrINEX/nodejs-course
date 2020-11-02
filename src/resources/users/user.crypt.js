const bcrypt = require('bcrypt');

const crypt = async body => {
  const { password } = body;
  const passwordCrypt = await bcrypt.hash(password, 8);
  return { ...body, password: passwordCrypt };
};

module.exports = {
  crypt
};
