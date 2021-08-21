const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/projectwall",{ useNewUrlParser: true,  useUnifiedTopology: true  })
.then(()=>{
    console.log("connection is established with MongoDB");  
})
.catch((err)=>{
    console.log("something went wrong "+err);
})
