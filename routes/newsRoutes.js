const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();

router.get('',newsController.news_index);
router.get('/:id',newsController.news_article);
module.exports = router;