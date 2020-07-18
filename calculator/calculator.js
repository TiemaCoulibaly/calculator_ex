const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;

	res.send("Le resultat est " + result);
});

app.post("/bmi", function (req, res) {
	var height = parseFloat(req.body.height);
	var weight = parseFloat(req.body.weight);

	var resultat = weight / (height * height);

	res.send("Le resultat de vote bmi " + resultat);
});

app.listen(3000, function () {
	console.log("server started");
});
