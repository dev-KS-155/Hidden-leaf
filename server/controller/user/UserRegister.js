const asyncHandler = require('express-async-handler')
const User = require('../../models/userModels')
const bcrypt = require('bcrypt');

const userRegister = asyncHandler(async (req, res) => {

    const { name, email: { address: email }, irctcNo, mobileNo: { number: mobileNo }, password: { Pass: password } } = req.body;

    if (!name || !email || !password || !irctcNo || !mobileNo) {
        res.status(400);
        throw new Error("All fileds are mandatory!")
    }

    const userAvaliable = await User.findOne({ email });
    if (userAvaliable) {
        res.status(400);
        throw new Error("User are already register")
    }

    // hash_password
    const hasPassword =  await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email: {
            address: email,
        },
        irctcNo,
        mobileNo: {
            number: mobileNo,
        },
        password: {
            Pass: hasPassword
        }

    })

    if (user) {
        res.status(200).json({
            _id: (await user).id,
            name: (await user).name,
            email: (await user).email,
            irctcNo: (await user).irctcNo,
            mobileNo: (await user).mobileNo
        })
    }
    else {
        res.status(400);
        throw new Error("User data are not valid")
    }
})

module.exports = userRegister