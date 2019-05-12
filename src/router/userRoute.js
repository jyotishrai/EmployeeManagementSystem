const express  =  require('express')
var usrRoutr = express.Router();

const userController  = require('../controller/userController')
console.log("there ar3 comming2");


 
usrRoutr.post('/createUser', userController.saveUse) 

usrRoutr.post('/getUser', userController.getUserByName)
usrRoutr.post('/myUser', userController.getUserBydate)

usrRoutr.post('/myValue', userController.getUserBystatus)
 

module.exports = usrRoutr;


  