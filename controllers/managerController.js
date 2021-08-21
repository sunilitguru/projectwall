
const managerService = require('../services/managerService');




const changeProjectStatus = (req,res)=>{

    let projectId = req.params.id;
    let projectStatus = req.body;

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




module.exports = {
    changeProjectStatus : changeProjectStatus
};