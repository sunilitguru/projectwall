const mongoose  = require("mongoose"); 
const validator = require('validator');

const projectSchema = new mongoose.Schema({


project_name:{
    type: String,
    required: true,
   
    },
project_description:{
    type: String,
    required: true,
    
    },
icon:{
    data: Buffer,
	contentType: String,
    },
project_stage:{
    type:String,
    required:true,

    },
project_status:{
    type: Boolean,
 
    default:false 
},
client_name:{
    type:String,
    required: true
},
manager_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},
end_date:{
    type:Date,
    required:true
}   


},{timestamps:true});

const projectModel = mongoose.model("project",projectSchema)

module.exports = {projectModel, projectSchema};
