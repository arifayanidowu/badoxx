var express = require('express');
var router = express.Router();

/* GET clients page. */
router.get('/', function(req, res, next) {
    res.render('clients', { title: 'Clients' });
});

module.exports = router;