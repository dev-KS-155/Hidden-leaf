const mongodb = require('mongoose');

const Role = new mongodb.Schema({
    user_id:{
        type: mongodb.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    role: {
        type: String,
        required: true
    },
})

module.exports = mongodb.model("Role",Role)