const mongodb = require('mongoose');

const UserSchema = new mongodb.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        address: {
            type: String,
            required: [true, "Please enter your email"],
            unique: [true, "Email are already taken"]
        },
        isVarify: {
            type: Boolean,
            default: false
        },
        emailVarifyToken: {
            type: String,
        },
    },
    irctcNo: {
        type: String,
        required: [true, "Please enter your IRCTC number"],
    },
    mobileNo: {
        number: {
            type: String,
            required: [true, "Please enter your Mobile Number"],
            unique: [true, "Mobile Number are already taken"]
        },
        isVarify: {
            type: Boolean,
            default: false
        },
        mobileVerifyToken: {
            type: String,
        },
    },
    password: {
        Pass: {
            type: String,
            required: [true, "Please enter your password"],
        },
        forgetPasswordToken: {
            type: String,
        },
    },
    verifyTokenExpiry: {
        type: Date,
    }
})

module.exports = mongodb.model("User", UserSchema)