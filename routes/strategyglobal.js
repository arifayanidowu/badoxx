var express = require('express');
var router = express.Router();

/* GET strategic global page. */
router.get('/', function(req, res, next) {
    res.render('strategyglobal', { title: 'Strategic Global Sourcing' });
});

module.exports = router;