const User = require('../schemas/userSchema').userModel

const adminService = require('../services/adminService')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerEmployee = (req, res)=>{

       bcrypt.hash(req.body.password,8,(err,hash)=>{
          if(err){
                console.log("something went Wrong");
                res.send(err+"something went wrong");
          }
          else{
                const user = new User({
 
                     name:req.body.name,
                     contact_no:req.body.contact_no,
                     email:req.body.email,
                     password: hash,
                     role:req.body.role
                }) 
                user.save()
                .then((data)=>{
                res.status(200).json({
                result: data
                })
                console.log("employee added");
                })
               .catch((err)=>{
                  res.status(500).json({
                  error:err
               })
               console.log(err);
               })
              }

      })
}



var addProject =  (req,res)=>{

   
        let project = req.body;
       // let manager_email = req.body.manager_id;
    
        adminService.addProject(project)
       .then((data)=>{
           res.status(200).json({msg:"Project added successfully"});
           console.log(data+ "Project added");
       })
       .catch((err)=>{
           res.status(400).json({msg:"Error while creating project"});
           console.log(err);
       })


};

module.exports = { 
    registerEmployee : registerEmployee ,
    addProject       : addProject
};