
const empService = require('../services/employeeService');



const getAllProjects = (req,res)=>{

    //send req to service layer for getting all projects from the db
    empService.getAllProjects()
    .then((result) => {

        res.status(200).json({
            data : result,
            msg  : "all projects getting successfully"
        });
        
    }).catch((err) => {

        res.status(400).json({
            data : err,
            msg  : "getting an error while fetching projects"
        });
        
    });


};


const getAllEvents = (req,res)=>{

    let projectId = req.params.id;
    //send req to service layer for getting all events from specific project
    empService.getAllProjects(projectId)
    .then((result) => {

        res.status(200).json({
            data : result,
            msg  : "all events getting successfully"
        });
        
    }).catch((err) => {

        res.status(400).json({
            data : err,
            msg  : "getting an error while fetching events"
        });
        
    });


};


const addEvent = (req, res)=>{

    //get new object of event from request body
    let newEvent  = req.body;
    let projectId = req.params.id;

    //send new event object to the service layer
    empService.addEvent(newEvent,projectId)
    .then((result) => {
 
        //send successful response to the client 
        res.status(200).json({
            data : result,
            msg  : "events added successfully"
        });
        
    }).catch((err) => {

        //send un-successful response to the client
        res.status(400).json({
            data : err,
            msg  : "getting error while adding event !!"
        });
        
    });


};

const updateEvent = (req,res)=>{

    //get event from request for update
    let updEvent  = req.body;
    let projectId = req.params.id;

    empService.updateEvent(updEvent, projectId)
    .then((result) => {
 
        //send successful response to the client 
        res.status(200).json({
            data : result,
            msg  : "events updated successfully"
        });
        
    }).catch((err) => {

        //send un-successful response to the client
        res.status(400).json({
            data : err,
            msg  : "getting error while updating event !!"
        });
        
    });


};


const removeEvent = (req,res)=>{

    let eventId = req.params.e_id;
    let projectId = req.params.p_id;

    empService.removeEvent(eventId, projectId)
    .then((result) => {
 
        //send successful response to the client 
        res.status(200).json({
            data : result,
            msg  : "events deleted successfully"
        });
        
    }).catch((err) => {

        //send un-successful response to the client
        res.status(400).json({
            data : err,
            msg  : "getting error while deleting event !!"
        });
        
    });


};






module.exports = {

    getAllProjects : getAllProjects,
    addEvent       : addEvent,
    updateEvent    : updateEvent ,
    removeEvent    : removeEvent  ,
    getAllEvents   : getAllEvents

};