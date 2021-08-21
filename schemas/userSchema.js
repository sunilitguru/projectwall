const mongoose  = require("mongoose"); 
const validator = require('validator');

const userSchema = new mongoose.Schema({


name:{
    type: String,
    required: true,
   
    },
contact_no:{
    type: Number,
    required: true,
    min:[10,'contact should be 10 digit']
    },
 email:{
    type: String,
    required: true,
    validate:{
        validator:validator.isEmail,
        message:'{VALUE} is not valid'
    }
    },
password:{
    type:String,
    required: true
    },
role:{
        type: String,
        enum : ['USER','ADMIN',"MANAGER"],
        default: 'USER'
}   


},{timestamps:true});
const userModel = mongoose.model("user",userSchema)

module.exports = {userModel, userSchema};
