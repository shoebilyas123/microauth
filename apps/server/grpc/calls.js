const { LoginRequest } = require('../protos/auth_pb');
const client = require('./client');

exports.login = async ({ email, password }) =>
  new Promise((resolve, reject) => {
    const login_req = new LoginRequest().setEmail(email).setPassword(password);
    let result = {};
    console.log(login_req);
    client.login(login_req, (err, res) => {
      if (err) reject(err);
      const user = res.getUser();
      result = {
        username: user.getUsername(),
        email: user.getEmail(),
        profilePic: user.getProfilepic(),
        accessToken: user.getAccesstoken(),
        id: user.getId(),
      };
      resolve(result);
    });
  });
