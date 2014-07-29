var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	'use strict';

	res.send('Welcome to Cordain API!');
});

router.get('/:userId', function(req, res) {
	'use strict';

	res.send('Welcome to Cordain API, ' + req.params.userId);
});

module.exports = router;
