const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Employee = new Schema({
    employeeId : {type : String,unique: true},
    employeeName : {type : String},
    employeeSalary : {type : Number}
},
{ versionKey: false }
)


module.exports = mongoose.model("employee", Employee);