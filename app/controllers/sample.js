exports.main = (req, res) => {
  res.send({ data: 'working example' });
};

exports.sampleMiddleware = (_, res) => {
  res.send({ data: 'middleware works' });
};
