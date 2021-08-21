const Project = require('../schemas/projectSchema').projectModel



const addProject = (newProject)=>{

//let email =  await Project.findOne({manager_email})
//console.log(email);
   var newProject= new Project(newProject)
   return newProject.save()
};




module.exports = {
   addProject : addProject
};