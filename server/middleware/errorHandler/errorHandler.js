const statusConstant = require('../../statusConstant')
const errorHandler = (err,req,res,next)=>{
    const statusCode =  res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case statusConstant.NOT_FOUND:
            res.json({
                title : "NOT FOUND",
                message : err.message,
                stackTrace:err.stack,
                isCorrect : false
            })
            break;
        
        case statusConstant.VALIDATION_ERROR:
            res.json({
                title : "VALIDATION FAILED",
                message : err.message,
                stackTrace:err.stack,
                isCorrect : false
            })
            break;
        case statusConstant.UNAUTHORIZED:
            res.json({
                title : "UNAUTHORIZED ",
                message : err.message,
                stackTrace:err.stack,
                isCorrect : false
            })
            break;
        case statusConstant.FORBIDDEN:
            res.json({
                title : "FORBIDDEN",
                message : err.message,
                stackTrace:err.stack,
                isCorrect : false
            })
            break;    
        case statusConstant.SERVER_ERROR:
            res.json({
                title : "SERVER_ERROR",
                message : err.message,
                stackTrace:err.stack,
                isCorrect : false
            })
            break;    
        default:
            console.log("Undentified Error !")
            break;
    }
    next();
}

module.exports = errorHandler