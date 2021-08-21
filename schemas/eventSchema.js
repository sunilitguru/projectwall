const mongoose  = require("mongoose"); 
const validator = require('validator');

const eventSchema = new mongoose.Schema({


project_name:{

    type     : String,
    required : true
   
    },
user_name:{

    type     : String,
    required : true
    
    },
activity:{

    type     : String,
    required : true
    
    },
type_of_update:{

    type     : String,
    required : true

    },
attachment:{
    data        : Buffer,
    contentType : String
    
},
internal_flag:{
    type     : String,
    enum     : ['RED','GREEN','YELLOW','NULL'],
    default  : 'NULL',
    required : true
},
external_flag:{
    type     : String,
    enum     : ['RED','GREEN','YELLOW','NULL'],
    default  : 'NULL',
    required : true
},
description:{
    type     : String,
    required : true
},
projectId :{
    type     : mongoose.Schema.Types.ObjectId
}


},{timestamps:true});

const eventModel = mongoose.model("event",eventSchema)

module.exports = {eventModel, eventSchema};
