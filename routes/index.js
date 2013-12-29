module.exports = function(app) {	
	// Displays index page
	app.get('/', function(req, res) {
		res.render('index.html');
	});
};

