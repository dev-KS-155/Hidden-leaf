const asyncHandler = require('express-async-handler')
const User = require('../../models/userModels')
const bcrypt = require('bcrypt');


// change password
const changePassword = asyncHandler( async (req, res) => {
    const { password } = req.body;
    const user = await User.findOne({ _id: req.userAvaliable.id });
    if (!user) {
        res.status(404);
        throw new Error("User are not found !");
    }
    const hasPassword = await bcrypt.hash(password, 10);
    user.password.Pass = hasPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
})

module.exports = { changePassword }