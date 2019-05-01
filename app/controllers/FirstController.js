
const firstController = {};

firstController.index = (req, res) => {
  res.send({ data: 'index first controller method' });
};

firstController.show = (req, res) => {
  res.send({ data: `show first controller method ${req.params.id}` });
};

module.exports = firstController;
