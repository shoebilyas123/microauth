const { LoginRequest } = require('../protos/auth_pb');
const client = require('./client');

exports.login = async ({ email, password }) => {
  const login_req = new LoginRequest().setEmail(email).setPassword(password);

  await client.login(login_req, (err, res) => {
    if (err) {
      console.log(err);
      return new Error('something went wrong');
    }

    return res.getUser();
  });
};
