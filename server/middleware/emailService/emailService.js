const nodemailer = require('nodemailer')
const User = require('../../models/userModels');
const bcrypt = require('bcrypt');
const useFullData = require('../../usefullData');


const sendSevice = async ({ emailType, userId, messageTitle, message }) => {

    const hashToken = await bcrypt.hash(userId.toString(), 10);
    const user = await User.findById({ _id: userId });

    console.log(useFullData)


    if (emailType === "VERIFY") {
        await User.findByIdAndUpdate(userId,
            {
                'email.emailVarifyToken': hashToken,
                verifyTokenExpiry: Date.now() + 3600000,
            }
        )
    }
    else if (emailType === "FORGETPASSWORD") {
        await User.findByIdAndUpdate(userId,
            {
                'password.forgetPasswordToken': hashToken,
                verifyTokenExpiry: Date.now() + 3600000
            }
        )
    }

    var transport = nodemailer.createTransport({
        host: useFullData.HOST,
        port: useFullData.PORT,
        auth: {
            user: useFullData.MAILUSER,
            pass: useFullData.PSS
        }
    });
    
    const mailOptinons = {
        from: 'Krishnasumit60@gmail.com',
        to: await user.email.address,
        subject: emailType === "VERIFY" ? "Verify your email" : (emailType === "FORGETPASSWORD" ? "Reset your Password" : messageTitle),
        html: emailType === "Offers" ?
        `<h1>${messageTitle}</h1><p>${message}</p>` :
        `<p>click <a href=${useFullData.DOMAIN}/user/${emailType === "VERIFY" ? "emailVarify" : "forgetPassword"}?token=${hashToken}>here</a> to
        ${emailType === "VERIFY" ? "Verify your email" : "Reset your Password"} </p>`
    }
    
    const mailResponese = await transport.sendMail(mailOptinons)
    
    console.log(mailResponese);

    return mailResponese;
}

module.exports = sendSevice