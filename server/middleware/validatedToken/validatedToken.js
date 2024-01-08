const asyncHandler = require("express-async-handler");
const usefullData = require('../../usefullData')
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, usefullData.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not Authorized");
            } else {
                req.userAvaliable = decoded.userAvaliable;
                next();
            }
        });
    } else {
        res.status(401);
        throw new Error("Authorization token missing");
    }
});

module.exports = validateToken;