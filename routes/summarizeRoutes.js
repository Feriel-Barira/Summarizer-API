const express = require('express');
const router = express.Router();
const { summarizeTextHandler } = require('../controllers/summarizeController');
const apiKeyAuth = require('../middleware/apiKeyAuth');
// Route POST /api/summarize
router.post('/', summarizeTextHandler);
router.post('/', apiKeyAuth, summarizeTextHandler);

module.exports = router;

