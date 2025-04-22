const express = require('express');
const router = express.Router();
const emailController = require('../controller/emailController');

router.post('/email', emailController.sendEmail);

module.exports = router;
