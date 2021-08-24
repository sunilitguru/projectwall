
const managerService = require('../services/managerService');




const changeProjectStatus = (req,res)=>{

    let projectId = req.params.id;
    let projectStatus = req.body.project_status;

    managerService.changeProjectStatus(projectId, projectStatus)
    .then((result) => {

        res.status(200).json({
            data : result,
            msg  : "project status changed successfully"
        });
        
    }).catch((err) => {

        res.status(400).json({
            data : err,
            msg  : "getting an error while changing project status"
        });
        
    });


};

const changeProjectStage = (req,res)=>{

    let projectId = req.params.id;
    let projectStage = req.body.project_stage;

    managerService.changeProjectStage(projectId, projectStage)
    .then((result) => {

        res.status(200).json({
            data : result,
            msg  : "project stage changed successfully"
        });
        
    }).catch((err) => {

        res.status(400).json({
            data : err,
            msg  : "getting an error while changing project stage"
        });
        
    });


};




module.exports = {
    changeProjectStatus : changeProjectStatus,
    changeProjectStage  : changeProjectStage
};