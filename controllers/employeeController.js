
const empService = require('../services/employeeService');
const User       = require('../schemas/userSchema').userModel;
const jwt        = require('jsonwebtoken');
const bcrypt     = require('bcrypt');
const fs         = require('fs');


async function validatePassword(plainPassword, hashedPassword) {
    //validate password using bcrypt
    return await bcrypt.compare(plainPassword, hashedPassword);
   }
    

 const login = async (req, res) => {
    try {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     console.log(user)
     if (!user){
          res.status(401).send('Email does not exist');
     }
     const validPassword = await validatePassword(password, user.password);
     console.log(validPassword)
     console.log(process.env.JWT_SECRET)

     if (!validPassword) {
         res.status(401).send('password does not match');
     }
     //create token using jwt
     const accessToken = jwt.sign({
          userId: user._id ,
          name  : user.name,
          role  : user.role      
        },
         process.env.JWT_SECRET,
        {
          expiresIn: "1d"
        });

     res.status(200).json({
      data  : { email: user.email, role: user.role },
      token : accessToken
     })
    }catch (error) {
     res.status(401).json({error : error});
    }
};



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
   // let newEvent  = req.body;
    let projectId = req.params.id;

    var newEvent = {
        project_name       : req.body.project_name,
        user_name          : req.body.user_name,
        activity           : req.body.activity,
        type_of_update     : req.body.type_of_update,
        attachment: {
            //when using the "single" data come in req.file
            data: fs.readFileSync('./uploads/' + req.file.filename).toString('base64')
        },
        internal_flag      : req.body.internal_flag,
        external_flag      : req.body.external_flag,
        description        : req.body.description,
        projectId          : req.body.projectId
       
    }
    console.log(newEvent)

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
    let eventId = req.params.id;

    empService.updateEvent(updEvent, eventId)
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

    let eventId = req.params.id;

    empService.removeEvent(eventId)
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


const getProjectById = async (req,res)=>{

    let projectId = req.params.id;

    try{

       let project = await empService.getProjectById(projectId);
       res.status(200).send(project);

    }catch(error){

       res.status(401).json({error : error})

    }

};



module.exports = {

    getAllProjects : getAllProjects,
    getProjectById : getProjectById,
    addEvent       : addEvent,
    updateEvent    : updateEvent ,
    removeEvent    : removeEvent  ,
    getAllEvents   : getAllEvents ,
    login          : login

};