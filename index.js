// Imports
const express = require("express"),
	fs = require("fs"),
	path = require("path"),
	bodyParser = require("body-parser"),
	cmd = require("node-cmd");
const app = express();

// Configure express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

const CC_DIR = `C:\\Program Files (x86)\\Validar Incorporated\\Command Center\\Validar Command Center V4.0.11.14041`;

// Send application page
app.get("/validar/create-preview", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

// Process creating a preview
app.post("/validar/create-preview", (req, res) => {
	console.log(req.body);
	let alreadyExists = false;
	addDirectory(req.body)
		.then(data => {
			if (data && data.exists) {
				alreadyExists = true;
			}
			return addServices();
		})
		.then(data => {
			console.log("ALL DONE!");
			res.status(200).send({ success: true, alreadyExists });
		})
		.catch(err => {
			res.status(500).send({ error: true, message: err });
		});
});

// Launch server
app.listen(3002, () => {
	console.log(
		"Validar Preview Generator application is listening on port 3002"
	);
});

// Add Virtual Directory to IIS
function addDirectory(obj) {
	return new Promise((resolve, reject) => {
		cmd.get(
			`%systemroot%\\system32\\inetsrv\\appcmd add vdir /app.name:"Default Web Site/" /path:/${
				obj.folderName
			} /physicalPath:C:\\validarApplications\\${obj.parentFolderName}\\${
				obj.folderName
			}\\${obj.subfolderName}`,
			(err, data, stderr) => {
				if (!err) {
					resolve(data);
				} else {
					if (err.code === 183) {
						resolve({ exists: true });
					} else {
						reject(err);
					}
				}
			}
		);
	});
}

// Add Services application
function addServices(obj) {
	return new Promise((resolve, reject) => {
		cmd.get(
			`%systemroot%\\system32\\inetsrv\\appcmd add app /site.name:"Default Web Site" /path:/${
				obj.folderName
			}/Services /physicalPath:"${CC_DIR}"`,
			(err, data, stderr) => {
				if (!err) {
					resolve(data);
				} else {
					if (err.code === 183) {
						resolve({ exists: true });
					} else {
						reject(err);
					}
				}
			}
		);
	});
}
