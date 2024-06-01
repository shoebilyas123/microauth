const { login } = require('../grpc/calls');

const getErrorCode = (code) => {
  switch (code) {
    case 5:
      return 404;
    default:
      return 500;
  }
};
exports.apiLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });
    const result = await login({ email, password });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(getErrorCode(error?.code || 500))
      .json({ message: error.details || 'internal server error' });
  }
};
