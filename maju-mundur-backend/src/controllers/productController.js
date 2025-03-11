const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = new Product({ name, price, merchant: req.user._id });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
