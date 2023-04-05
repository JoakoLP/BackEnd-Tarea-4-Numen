const { Product } = require("../models/product");
const validate = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product != null) {
      next();
    } else {
      res.status(500).json({ msg: "invalid id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { validate };
