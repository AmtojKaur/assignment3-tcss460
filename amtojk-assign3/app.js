const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Route for the root URL
app.get('/', function (req, res) { 
    res.status(200); 
    console.log("A request has been processed at / (root)"); 
});

// Route for calculating BMI Metric
app.get("/bmi/:weight/:height", function(req, res) {
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height);
    if (isNaN(weight) || isNaN(height)) {
        res.status(400);
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const bmi = weight / (Math.pow(height, 2));
    console.log("/bmi/:weight/:height request is made...");
    res.json({ bmi: bmi });
});

// Route for calculating BMI Imperical
app.get("/bmi_i/:weight/:height", function (req, res) {
    const weight = parseFloat(req.params.weight); // Parse as float to handle decimal values
    const height = parseFloat(req.params.height); // Parse as float to handle decimal values
    if (isNaN(weight) || isNaN(height)) {
      res.status(400);
      res.json({ error: "Bad request" });
      return;
    }
    res.status(200);
    const bmi = (weight / (height * height)) * 703;
    console.log("/bmi_i/:weight/:height request is made...");
    res.json({ bmi: bmi });
  });

// Route for calculating body fat Metric
app.get("/bodyfat/:age/:bmi", function(req, res) {
    const bmi = parseInt(req.params.bmi);
    const age = parseInt(req.params.age);
    if (isNaN(age) || isNaN(bmi)) {
        res.status(400);
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const bodyfat = (1.20 * bmi) + (0.23 * age) - 16.2;
    console.log("/bodyfat/:age/:bmi request is made...");
    res.json({ bodyfat: bodyfat });
});

// Route for calculating body fat Imperical
app.get("/bodyfat_i/:age/:bmi", function(req, res) {
    const bmi = parseInt(req.params.bmi);
    const age = parseInt(req.params.age);
    if (isNaN(age) || isNaN(bmi)) {
        res.status(400);
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const bodyfat = (1.20 * bmi) + (0.23 * age) - 16.2;
    console.log("/bodyfat_i/:age/:bmi request is made...");
    res.json({ bodyfat: bodyfat });
});

// Route for calculating BMR (Basic Metabolic Rate) Metric
app.get("/bmr/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height) / 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400);
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log("/bmr/:age/:weight/:height request is made...");
    res.json({ bmr: bmr });
});

// Route for calculating BMR (Basic Metabolic Rate) Imperial 
app.get("/bmr_i/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight) * 0.45359237;
    const height = (parseInt(req.params.height) * 0.0254)/ 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400);
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log("/bmr_i/:age/:weight/:height request is made...");
    res.json({ bmr: bmr });
});

// Route for calculating daily calorie intake needs Metric
app.get("/calories/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height) / 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400)
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const dailycal = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    console.log("/calories/:age/:weight/:height request is made...");
    res.json({ dailyCal: dailycal });
});

// Route for calculating daily calorie intake needs Imperial 
app.get("/calories_i/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight) * 0.45359237;
    const height = (parseInt(req.params.height) * 0.0254)/ 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400)
        res.json({ error: "Bad request" });
        return;
    }
    res.status(200);
    const dailycal = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    console.log("/calories_i/:age/:weight/:height request is made...");
    res.json({ dailyCal: dailycal });
});

// Start the server and listen on the specified port
app.listen(port, function () { 
    console.log(`API version 1.0.0 is now listening on port ${port}`); 
});

/*
// Import express module and instantiate 
// express object var app
var express = require("express");
const cors = require('cors');
var app = express();

// Set a port constant also allows for switching port
const port = 3000;

app.use(cors());

//all method calls are written bellow 

app.get('/', function (req, res) { 
    res.status(200); 
    console.log("a request has been processed in / (root) "); 
});

app.get("/bmi/:weight/:height", function(req, res) {
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height);
    if(isNaN(weight) || isNaN(height)){
        res.status(400);
        res.json({error: "bad request"});
        return;
    }
    res.status(200);
    const bmi = weight/(Math.pow(height,2));
    console.log("/bmi/weight/height   request is made...");
    res.json({bmi: bmi});
});

app.get("/bodyfat/:age/:bmi", function(req, res) {
    const bmi = parseInt(req.params.bmi);
    const age = parseInt(req.params.age);
    if(isNaN(age) || isNaN(bmi)){
        res.status(400);
        res.json({error: "bad request"});
        return;
    }
    res.status(200);
    const bodyfat = (1.20 * bmi) + (0.23 * age) - 16.2;
    console.log("/bodyfat/age/bmi   request is made...");
    res.json({bodyfat: bodyfat});
});

app.get("/bmr/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height)/100;
    if(isNaN(age) || isNaN(weight) || isNaN(height)){
        res.status(400);
        res.json({error: "bad request"});
        return;
    }
    res.status(200);
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log("/bmr/age/weight/height   request is made...");
    res.json({bmr: bmr});
});

app.get("/calories/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height)/100;
    if(isNaN(age) || isNaN(weight) || isNaN(height)){
        res.status(400);
        res.json({error: "bad request"});
        return;
    }
    res.status(200);
    const dailycal = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    console.log("/calories/age/weight/height   request is made...");
    res.json({dailyCal: dailycal});
});

// This starts server by telling it to listen to a specfic port
app.listen(port, function () { 
    console.log(`API version 1.0.0 is running on port ${port}`); 
});*/
