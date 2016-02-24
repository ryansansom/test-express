import express from 'express';
import { content } from '../react/server.js';

const router = express.Router();

router.get('/', function(req, res) {
  res.render('react-layout', { content: content });
});

module.exports = router;
