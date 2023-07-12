const express = require('express');
const router = express.Router();
const WelcomeController = require('../app/Http/Controllers/WelcomeController');

router.get('/', (req, res) => new WelcomeController(req, res).index());

module.exports = router;
