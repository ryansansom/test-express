import express from 'express';
import { content } from '../react/server.js';

const router = express.Router();

router.get('/', function(req, res) {
  res.render('pages/MainPage');
});

module.exports = router;
