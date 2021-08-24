const express     = require('express');
const db          = require('./DBconfig/config');
const app         = express();
const adminRoutes = require('./routes/adminRoute');
const  empRoute   = require('./routes/employeeRoute');
const managerRoute= require('./routes/managerRoute');
const path = require('path');




require("dotenv").config({
 path: path.join(__dirname, "./.env")
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/admin',adminRoutes)
app.use('/api', empRoute);
app.use('/api', managerRoute);





const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server started listening on port number ${port}`);
});