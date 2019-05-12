const express  =  require('express')
var usrRoutr = express.Router();

const employeeController  = require('../controller/employeeController')
usrRoutr.post('/createEmployee', employeeController.createEmployee) 


usrRoutr.post('/getEmployee', employeeController.getEmployee)

usrRoutr.post('/getEmployeeName', employeeController.getEmployeeName)

module.exports = usrRoutr;


  