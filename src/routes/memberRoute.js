const express = require('express');
const app = express();
const memberController = require("../controllers/memberController")

app.get("/",memberController.ge);
app.get("/:id",memberController.getEmployeeById);
app.get("/tax/:sal",memberController.getEmployeeTax);
app.get("/retire/:age",memberController.getEmployeeRetire);

app.post("/",memberController.addEmployee);


module.exports = app;