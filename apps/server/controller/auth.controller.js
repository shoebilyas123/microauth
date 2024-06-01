exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
};
