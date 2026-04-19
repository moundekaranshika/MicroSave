const express = require('express');
const router = express.Router();
const { addTransaction, getSummary } = require('../controllers/transactionController');

router.post('/transactions', addTransaction);
router.get('/summary', getSummary);

module.exports = router;
