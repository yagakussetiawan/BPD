const express = require('express');
const { createTransaction } = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTransaction);

module.exports = router;
