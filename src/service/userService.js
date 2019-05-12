const User = require("../model/user");


let saveUser  = async function(data){
    try{

   let users  =  await User.create(data);
   
   return users;

}catch(err){
    console.log("there are the error",err);
    
    return err
}
}



let getUser = async function (data){
    try{
    let user = await User.find({firstName : data})
    return user;

    }
    catch(error){ console.log ("passing my erreor ",error)};
    
}


let myUser = async function (data){
try {
    let User1 = await User.findOne({date : data})
    return User1;

}
catch(error){console.log ("passing my err", error)};

}

let myValue = async function (data) {
    try{
        let User2 = await User.find({status : data})
        return User2;
    }
    catch(erreor){console.log("Pas error value",erreor)}
}


exports.myValue = myValue;

exports.myUser = myUser;
exports.getUser = getUser;
exports.saveUser = saveUser;
