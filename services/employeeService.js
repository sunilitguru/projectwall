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

const addEvent = async (newEvent, projectId)=>{
    // find the project by project Id
    let existProject = await Project.findOne({_id : projectId});
    //check project exist ? yes : no
    if(existProject){
        // create new event
        let event = new Event(newEvent);

        //save project id into event project_id 
        event.projectId = projectId;

        //finally save the event into database
        await event.save();
        return event;
    }
    else{
        return new Error('project does not exist')
    }


};


const updateEvent = async (updateEvent,eventId)=>{

     // find the event by event Id
     let existEvent = await Event.findOne({_id : eventId});
     //check event exist ? yes : no
     if(existEvent){
         
        //if event exist then update 
        return Event.findByIdAndUpdate(eventId,updateEvent);
        
     }
     else{
         //if event does not exist then return error
         return new Error('event does not exist')
     }


};

const removeEvent = async (eventId)=>{

    // find the event by event Id
    let existEvent = await Event.findOne({_id : eventId});
    //check event exist ? yes : no
    if(existEvent){
        
       //if event exist then delete that event 
       return Event.deleteOne(eventId);
       
    }
    else{
        //if event does not exist then return erro
        return new Error('event does not exist')
    }


};






module.exports = {

    getAllProjects : getAllProjects,
    addEvent       : addEvent,
    updateEvent    : updateEvent,
    removeEvent    : removeEvent,
    getAllEvents   : getAllEvents

};