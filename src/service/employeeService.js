const Employee = require("../model/employee")


let createEmployee = async function (data) {
    try {
        let employee = await Employee.create(data);
        
        return employee;
    } catch (err) {

        console.log("there are the error", err);
        return err;
    }
}
     

let getEmployee= async function (data){
    try{
        console.log("pass any value ",)
    let user = await Employee.findOne({employeeId : data.employeeId})
    return user;

    }
    catch(error){ console.log ("passing my erreor ",error);
    return error;
}
}


let getEmployeeName= async function (data){
    try{
        console.log("pass any value ",)
    let user1 = await Employee.find({employeeName : /.*R*/})
    console.log("user1=========",user1);
    
    return user1;
    }
    catch(error){ console.log ("passing my erreor ",error);
    return error;
}
}


    

exports.getEmployeeName = getEmployeeName;

exports.getEmployee = getEmployee;


exports.createEmployee = createEmployee;
