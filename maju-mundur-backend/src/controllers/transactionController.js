const Transaction = require('../models/Transaction');
const Product = require('../models/Product');

exports.createTransaction = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product || product.stock < quantity) return res.status(400).json({ message: 'Stock unavailable' });

        const transaction = new Transaction({
            customer: req.user.id,
            product: productId,
            quantity,
            totalPrice: product.price * quantity,
            status: 'completed'
        });

        product.stock -= quantity;
        await product.save();
        await transaction.save();

        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
