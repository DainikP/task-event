const express = require('express');
const { getSessions } = require('../controllers/sessionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSessions);

module.exports = router;
