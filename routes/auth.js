var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/signin', (req, res, next) => {
  res.render('signin');
})

module.exports = router;