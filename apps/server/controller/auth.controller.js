const { login } = require('../grpc/calls');

exports.apiLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await login({ email, password });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'internal server error' });
  }
};
