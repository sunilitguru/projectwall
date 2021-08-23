const User = require('../schemas/userSchema').userModel
const fs   = require('fs');

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

   console.log(req.file)
    var project = {
        project_name       : req.body.project_name,
        project_description: req.body.project_description,
        icon: {
            //when using the "single" data come in req.file
            data: fs.readFileSync('./uploads/' + req.file.filename).toString('base64')
        },
        project_stage      : req.body.project_stage,
        project_status     : req.body.project_status,
        client_name        : req.body.client_name,
        manager_name       : req.body.manager_name
       
    }
       
        console.log(project);
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