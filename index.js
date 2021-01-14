const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
	res.send({
		api: [{ "/emp": "Employee data" }, { "/project": "Project data" }],
	});
});

app.get("/emp", (req, res) => {
	res.attachment("Employee.csv").sendFile(
		path.join(__dirname, "Employee.csv")
	);
});

app.get("/project", (req, res) => {
	res.attachment("Project.csv").sendFile(path.join(__dirname, "Project.csv"));
});

app.get("*", (req, res) => {
	res.redirect("/");
});

const port = process.env.PORT || 7500;
app.listen(port, () => console.log(`Listening on port ${port}`));
