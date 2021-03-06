var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.enable('view cache');
app.set('views', path.join(__dirname, 'assets/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(favicon(__dirname + '/assets/public/images/favicon.ico'));
app.use(compression({ threshold: 0 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets/public')));

app.use('/', routes);
app.use('/api', api);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
	'use strict';

	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		'use strict';

		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	'use strict';

	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
