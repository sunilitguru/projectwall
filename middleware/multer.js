const multer = require('multer');


const imagefilter = (req, file, cb)=>{

    if(file.mimetype.includes("png","jpg","jpeg")){
        cb(null, true);
    } 
        else{
            cb("Please upload only images ."); 
    }
};

var storage = multer.diskStorage({

    destination:(req,file, cb)=>{
        cb(null, './uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() +'-'+file.originalname)
    }
})

var upload = multer({storage:storage, fileFilter:imagefilter});

module.exports = upload