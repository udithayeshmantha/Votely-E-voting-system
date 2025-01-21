// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, resetPassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);