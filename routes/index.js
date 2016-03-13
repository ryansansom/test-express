var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home/index', {
    title: 'Home',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

router.get('/storage-solutions', function(req, res) {
  res.render('home/index', {
    title: 'Storage Solutions',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

router.get('/storage-services', function(req, res) {
  res.render('home/index', {
    title: 'Storage Services',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

router.get('/gallery', function(req, res) {
  res.render('home/index', {
    title: 'Gallery',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

router.get('/reviews', function(req, res) {
  res.render('home/index', {
    title: 'Reviews',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

router.get('/contact', function(req, res) {
  res.render('home/index', {
    title: 'Contact Us',
    props: {
      url: req.originalUrl,
      isTest: true
    }
  });
});

module.exports = router;
