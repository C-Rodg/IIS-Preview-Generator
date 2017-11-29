// Imports
const express = require("express"),
	fs = require("fs"),
	path = require("path"),
	bodyParser = require("body-parser");
const app = express();

// Configure express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

// Send application page
app.get("/validar/create-preview", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

// Launch server
app.listen(3002, () => {
	console.log(
		"Validar Preview Generator application is listening on port 3002"
	);
});
