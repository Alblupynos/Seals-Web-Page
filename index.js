var express = require("express");
var store = require("json-fs-store")("node_modules/js_storage");
var bodyParser = require("body-parser");

var app = express();
var jsonParser = bodyParser.json();

// Init storage
var commentsModel = {id:"comments", items: []};
store.load("comments", function(err, object) {
	if (err) {
		store.add(commentsModel, function(err) {
			if (err) throw err;
		});
	}
});

app.get("/comments", function(req, res) {
	store.load("comments", function(err, object) {
		if (err)
			res.status(500).end();
		else
			res.json(object);
	});
});

app.post("/addComment", jsonParser, function(req, res) {
	if(!req.body) {
    	res.status(400).end()
  	} else {
  		store.load("comments", function(err, object) {
		if (err) {
			res.status(500).end();
		} else {
			object.items.push(req.body);
			store.add(object, function(err) {
				if (err)
					res.status(500).end();
				else
					res.status(200).end()
			});
		}
	});
  	}
});

app.listen(3000);