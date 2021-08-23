const express     = require('express');
const db          = require('./DBconfig/config');
const app         = express();
const adminRoutes = require('./routes/adminRoute');
const  empRoute   = require('./routes/employeeRoute');
const managerRoute= require('./routes/managerRoute');



app.use(express.json());

app.use('/api/admin',adminRoutes)
app.use('/api', empRoute);
app.use('/api', managerRoute);





const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server started listening on port number ${port}`);
});