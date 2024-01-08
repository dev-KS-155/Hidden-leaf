const asyncHandler = require('express-async-handler')
const sendEmailService = require('../../middleware/emailService/emailService');
const User = require('../../models/userModels');

const sendEmailVerify = asyncHandler(async (req, res) => {

    const userId = req.userAvaliable.id;
    const user = await User.findById({ _id: userId });

    if (user && user.email.isVarify === true) {
        res.status(400);
        throw new Error("User's Email are already verified ")
    }
    else {
        const send =  await sendEmailService({ emailType: "VERIFY", userId: userId, messageTitle: null, message: null });
        if (!send) {
            res.status(400);
            throw new Error("Mail is not send due some reason! ")
        }
        res.status(200).json({
            titel: "Mail are sended successfully",
            kkk: send
        })
    }
})

const emailVarify = asyncHandler(async (req, res) => {

    // const urlToken = window.location.search.split("=")[1]; // fronted
    const urlToken = req.query.token; // Node.js way to get query parameters
    const userToken = await User.findOne({ 'email.emailVarifyToken': urlToken, verifyTokenExpiry: { $gt: Date.now() } })

    if (!userToken) {
        res.status(400);
        throw new Error("token are invalid or token are expiry! ")
    }

    userToken.email.isVarify = true;
    userToken.email.verifyTokenExpiry = undefined;
    userToken.verifyTokenExpiry = undefined;

    const user = await userToken.save();

    if (!user) {
        res.status(400);
        throw new Error("Email are not verify! ")
    }

    res.status(200).json({
        message: "Email are verify successfully",
    })
})

const emailUpadate = asyncHandler(async (req, res) => {
    const { newEmail } = req.body;
    const userId = req.userAvaliable.id;
    const user = await User.findById({ userId });

    if (!user) {
        res.status(404);
        throw new Error("Email are NOT_FOUND! ")
    }

    user.email.address = newEmail;

    const user_user = await user.save();

    if (!user_user) {
        res.status(400);
        throw new Error("Email are not updated! ")
    }
    else {
        res.status(200).json({
            message: "Email are updated successfully",
        })
    }
})

module.exports = { sendEmailVerify, emailVarify, emailUpadate }



