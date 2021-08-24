const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema').userModel;




  const verifyToken = async (req, res, next)=>{

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){

        return res.status(403).send("Token is required for authentication");

    }
    try{

        const { userId, exp } = await jwt.verify(token,process.env.JWT_SECRET);
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({
             error: "JWT token has expired, please login to obtain a new one"
            });
           }
           // it contains response local variables scoped to the request
           //res.locals.loggedInUser = await User.findById(userId);

    } catch(err){

        return res.status(401).send('In-valid Token');

    }
    return next();


}

module.exports = verifyToken;