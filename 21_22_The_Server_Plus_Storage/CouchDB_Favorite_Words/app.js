//Set up requirements
var express = require("express");
var Request = require('request');
var bodyParser = require('body-parser');
var _ = require('underscore');

//Create an 'express' object
var app = express();

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Enable json body parsing of application/json
app.use(bodyParser.json());

/*---------------
//DATABASE CONFIG
----------------*/
var cloudant_USER = 'YOUR-USER-NAME';
var cloudant_DB = 'YOUR-DB-NAME';
var cloudant_KEY = 'YOUR-DB-KEY';
var cloudant_PASSWORD = 'YOUR-DB-PASSWORD';

var cloudant_URL = "https://" + cloudant_USER + ".cloudant.com/" + cloudant_DB;

/*-----
ROUTES
-----*/

//Main Page Route - Show ALL data VIEW
app.get("/", function(req, res){
	res.render('index', {page: 'get all data'});
});

//Main Page Route - Show SINGLE word VIEW
app.get("/:word", function(req, res){
	var currentWord = req.params.word;
	res.render('index', {page: currentWord});
});

//SAVE an object to the db
app.post("/save", function(req,res){
	console.log("A POST!!!!");
	//Get the data from the body
	var data = req.body;
	console.log(data);
	//Send the data to the db
	Request.post({
		url: cloudant_URL,
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true,
		body: data
	},
	function (error, response, body){
		if (response.statusCode == 201){
			console.log("Saved!");
			res.json(body);
		}
		else{
			console.log("Uh oh...");
			console.log("Error: " + res.statusCode);
			res.send("Something went wrong...");
		}
	});
});

//JSON Serving route - Serve ALL Data
app.get("/api/all", function(req,res){
	console.log('Making a db request for all entries');
	//Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true
	},
	function (error, response, body){
		var theRows = body.rows;
		//Send all of the data
		res.json(theRows);
	});
});

//JSON Serving route - Serve SINGLE Word
app.get("/api/word/:word", function(req, res){
	var currentWord = req.params.word;
	console.log('Making a db request for: ' + currentWord);
	//Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true
	},
	function (error, response, body){
		var theRows = body.rows;
		//Filter the results to match the current word
		var filteredRows = theRows.filter(function (d) {
			return d.doc.word == currentWord;
		});
		res.json(filteredRows);
	});
});

//Catch All Route
app.get("*", function(req, res){
	res.send('Sorry, nothing doing here.');
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');