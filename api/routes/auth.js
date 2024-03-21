const express = require('express');
const { login,register } = require('../controllers/auth.js');
// import { login, select_role } from '../controllers/auth.js';

const router = express.Router();
router.post('/login', login);
router.post('/register', register);
// router.put('/select-role', select_role);

module.exports = router;
