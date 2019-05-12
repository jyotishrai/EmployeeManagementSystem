const employeeService = require('../service/employeeService');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//
let createEmployee = async function (req, res) {
    try {
        console.log("Enter into createEmployee     ", req.body);

        let = {
            employeeId,
            employeeName,
            employeeSalary
        } = req.body;
        if (req.body) {
            let data = await employeeService.createEmployee(req.body);
            console.log("Get response from database :::::  ",data);
            return res.json({"message":"Employee created successfully.",data:data})
        }
    } catch (e) {
        console.log("there are the error", e);
        return res.json({
            message: "Error to create Employee..",
            status: 400,
            error: e
        })
    }
}

let getEmployee = async function (req, res){
    try{
        console.log("enter to insertEmployee",  req.body);
        let={employeeId} = req.body;

        if (req.body){
            let data = await employeeService.getEmployee(req.body);
            console.log("get response=====", data);
            return res.json({"message ": "employee insert", data:data})
        }

    }
    catch(error){
        console.log("this is error", error);
        return res.json({
            message: "error to insert Employee", status: 400, error:error
        })

    }
}

let getEmployeeName = async function (req, res){
    try{
        console.log("enter to insertEmployee",  req.body);
        let={employeeName} = req.body;

        if (req.body){
            let data = await employeeService.getEmployeeName(req.body);
            console.log("get response=====", data);
            return res.json({"message ": "employee insert", data:data})
        }

    }
    catch(error){
        console.log("this is error", error);
        return res.json({
            message: "error to insert Employee", status: 400, error:error
        })

    }
}




exports.getEmployeeName = getEmployeeName;

exports.getEmployee = getEmployee;
exports.createEmployee = createEmployee;