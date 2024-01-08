const asyncHandler = require('express-async-handler')
const User = require('../../models/userModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const usefullData = require('../../usefullData')

const userLogin = asyncHandler(async (req, res) => {
    const { irctcNo, mobileNo, password } = req.body;

    if (!irctcNo || !password || !mobileNo) {
        res.status(400);
        throw new Error("All fileds are mandatory!")
    }

    const userAvaliable = await User.findOne({ irctcNo: irctcNo, 'mobileNo.number': mobileNo });

    if (userAvaliable && await bcrypt.compare(password, userAvaliable.password.Pass)) {
        const jwtToken = jwt.sign({
            userAvaliable: {
                name: userAvaliable.name,
                email: userAvaliable.email.address,
                irctcNo: userAvaliable.irctcNo,
                mobileNo: userAvaliable.mobileNo.number,
                id: userAvaliable.id,
            },
        },
            usefullData.TOKEN_SECRET,
            { expiresIn: "10m" }
        )

        res.status(200).json({
            message: "User are login",
            Token_Nuber: jwtToken
        })
    }
    else {
        res.status(401);
        throw new Error("Email Or password are incorrect");
    }
})

const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.userAvaliable);
})

module.exports = { userLogin, currentUser }