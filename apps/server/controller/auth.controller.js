const { login } = require('../grpc/calls');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const res = await login({ email, password });
    console.log(res);
    res.status(200).send('LOGIN');
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
};
