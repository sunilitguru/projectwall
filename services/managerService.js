const Project = require('../schemas/projectSchema').projectModel;
const Event   = require('../schemas/eventSchema').eventModel;




const changeProjectStatus = (projectId, newStatus)=>{
    let existProject = Project.findOne({_id:projectId});

    if(existProject){

        return Project.updateOne({
            _id:projectId
        },
        {
            $set:{project_status:newStatus}
        },
        {
            upsert:true
        });

    }
    else {
        throw new Error("project does not exist");
    }



};

const changeProjectStage = (newStage,projectId)=>{
    let existProject = Project.findOne({_id:projectId});

    if(existProject){

        return Project.updateOne({
            _id:projectId
        },
        {
            $set:{project_stage:newStage}
        },
        {
            upsert:true
        });

    }
    else {
        throw new Error("project does not exist");
    }



};



module.exports = {
    changeProjectStatus : changeProjectStatus,
    changeProjectStage  : changeProjectStage
};