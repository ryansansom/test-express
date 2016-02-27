import express from 'express';
import { content } from '../react/server.js';

const router = express.Router();

router.get('/1', function(req, res) {
  res.render('test-page1/index');
});

router.get('/2', function(req, res) {
  res.render('test-page2/index');
});

module.exports = router;
