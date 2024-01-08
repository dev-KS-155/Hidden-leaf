const express = require('express');
const usefullData = require('./usefullData')

const app = express();
app.use(express.json());

// mongodb connection
const dbConfing = require('./dbConfing/dbconfing');
dbConfing();

// UserRouter
app.use('/user',require('./routes/UserRouter'))

// TrainRouter
app.use("/train",require('./routes/trainRouter'));

// ErrorHandler
const errorHandler = require('./middleware/errorHandler/errorHandler')
app.use(errorHandler)

app.listen(usefullData.PORT_NUMBER,()=>{
    console.log("sever is running");
})