const mongodb = require('mongoose');
const usefullData = require('../usefullData')

const dbConfibg = async () => {
    try {
        mongodb.connect(usefullData.MONGO_URL)
        const connection = mongodb.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error,Please make sure MongoDB is running. ' + err
            );
            process.exit();
        })

    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error)
    }
}

module.exports = dbConfibg