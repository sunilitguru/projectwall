const Project = require('../schemas/projectSchema').projectModel;
const Event   = require('../schemas/eventSchema').eventModel;




const changeProjectStatus = (newStatus,projectId)=>{
    let existProject = Project.findOne({_id:projectId});

    if(existProject){

        return Project.updateOne({_id:projectId},{$set:{project_status:newStatus}},{upsert:true});

    }



};



module.exports = {
    changeProjectStatus : changeProjectStatus
};