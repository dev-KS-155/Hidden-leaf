const asyncHandler = require('express-async-handler')
const sendEmailService = require('../../middleware/emailService/emailService');
const User = require('../../models/userModels');
const bcrypt = require('bcrypt');

const sendEmailPassword = asyncHandler(async (req, res) => {

    const { email } = req.body;
    const user = await User.findOne({ 'email.address': email });
    if (!user) {
        res.status(404);
        throw new Error("User are not Found! ")
    }
    else {
        const send = await sendEmailService({ emailType: "FORGETPASSWORD", userId: user.id, messageTitle: null, message: null });

        if (!send) {
            res.status(400);
            throw new Error("Mail is not send due some reason! ")
        }
        res.status(200).json({
            titel: "Mail are sended successfully",
            message: send
        })
    }
})


const forgetPassword = asyncHandler(async (req, res) => {

    const { newPassword } = req.body;
    if (!newPassword) {
        res.status(400);
        throw new Error("Password must not empty!")
    }

    const hasPassword = await bcrypt.hash(newPassword, 10);

    const urlToken = req.query.token;
    const userToken = await User.findOne({ 'password.forgetPasswordToken': urlToken, verifyTokenExpiry: { $gt: Date.now() } })

    if (!userToken) {
        res.status(400);
        throw new Error("token are invalid or token are expiry! ")
    }

    if (userToken.password && typeof userToken.password === 'object' && 'Pass' in userToken.password) {
        userToken.password.Pass = hasPassword;
        userToken.verifyTokenExpiry = undefined;
    } else {
        res.status(400);
        throw new Error("Password must not empty! ")
    }

    const user = await userToken.save();

    if (!user) {
        res.status(400);
        throw new Error("Password are not change!")
    }

    res.status(200).json({
        message: "Password are successfully change!",
    })
})

module.exports = { sendEmailPassword, forgetPassword }