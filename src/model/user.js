const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const User = new Schema({
  firstName : {type : String,required :true},
  lastName : {type : String, required: true},
  email : {type : String, required  : true, unique : true},
  phoneNumber :{type: Number, required: true, unique: true},
  title: {type :String, required : true},
  status :{type : Boolean,default : false },
  password :{type : String},
  date: {type : Number,default : Date.now() }
},
{ versionKey: false }
);

module.exports = mongoose.model("user", User);
