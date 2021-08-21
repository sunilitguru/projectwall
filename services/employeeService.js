const User    = require('../schemas/userSchema').userModel;
const Project = require('../schemas/projectSchema').projectModel;
const Event   = require('../schemas/eventSchema').eventModel;



const getAllProjects = ()=>{

    return Project.find();


};

const getAllEvents = (projectId)=>{

   let existProject = Project.findOne({_id:projectId});

   if(existProject){

        return Event.find({projectId : projectId});

   }

};

const addEvent = (newEvent, projectId)=>{



};

const updateEvent = (updateEvent,projectId)=>{



};

const removeEvent = (eventID, projectId)=>{



};






module.exports = {

    getAllProjects : getAllProjects,
    addEvent       : addEvent,
    updateEvent    : updateEvent,
    removeEvent    : removeEvent,
    getAllEvents   : getAllEvents

};