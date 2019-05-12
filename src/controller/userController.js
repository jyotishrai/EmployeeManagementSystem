
const userService   = require('../service/userService');
const bcrypt = require('bcrypt');
const saltRounds = 10;


let saveUse  =  async function(req,res){
    try {
console.log("there are ",req.body);

    let = {firstName,lastName,email,phoneNumber,title ,password,status} = req.body;
    if(req.body){

        bcrypt.genSalt(saltRounds,  function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                req.body["password"] =  hash; 
        
            let data =  await userService.saveUser(req.body);
        if(data){
         console.log("data===>",data);
         
         return res.json({message : "user create succssfully",status :200})

     }else {
        return res.json({message : "error to create",status :400})

     }

    })
})
}
}catch(e){
    console.log("there are the error",e);
    
    return res.json({message : "catch in err",status :400,error : e})

}


}





let getUserByName = async function (req, res){
     try{

      var firstName = req.body.firstName
      if(firstName){
        console.log("hello print ",firstName);
        
      let getResult  =  await userService.getUser(firstName);

      if(getResult){

      return res.json({message : "user get succssfully",status :200, data : getResult})
      }
      else{ 
           return res.json({message : "error to get",status :400})
}
 }
      else{
          return res.json ({message  : " get user error ",status : 400})
}
 }
     catch(e){ console.log("there are the error",e);
    
     return res.json({message : "catch in err",status :400,error : e})
 }
}

let getUserBydate = async function(req, res){
    try{

            var find = req.body.findDate
            if(findDate){
              console.log("Date print ",findDate);
              
            let getResult  =  await userService.myUser(findDate);
      
            if(getResult){
      
            return res.json({message : "user get succssfully",status :200, data : getResult})
            }
            else{ 
                 return res.json({message : "error to get",status :400})
          } 
        }     
    
    else{
        return res.json ({message  : " get user error ",status : 400})
    }
}

catch(e){ console.log("there are the error",e);
    
return res.json({message : "catch in err",status :400,error : e})

}
}


let getUserBystatus = async function(req, res){
    try{

            var status = req.body.status
            if(status){
              console.log("Status  print ",status);
              
            let getResult  =  await userService.myValue(status);
      
            if(getResult){
      
            return res.json({message : "user get succssfully",status :200, data : getResult})
            }
            else{ 
                 return res.json({message : "error to get",status :400})
          } 
        }     
    
    else{
        return res.json ({message  : " get user error ",status : 400})
    }
}

catch(e){ console.log("there are the error",e);
    
return res.json({message : "catch in err",status :400,error : e})

}
}


exports.getUserBystatus = getUserBystatus;
exports.getUserBydate= getUserBydate;



exports.getUserByName = getUserByName;


exports.saveUse = saveUse;
