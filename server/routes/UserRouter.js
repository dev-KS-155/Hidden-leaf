const express = require('express');
const router = express.Router();

const userRegister = require('../controller/user/UserRegister')
const { userLogin, currentUser } = require('../controller/user/UserLogin');
const { changePassword } = require('../controller/user/ChangePassword')
const validateToken = require('../middleware/validatedToken/validatedToken');
const {sendEmailVerify,emailVarify,emailUpadate} = require('../controller/user/EmailVerify');
const { sendEmailPassword, forgetPassword } = require('../controller/user/ForgetPassword');

// sinup
router.route('/register').post(userRegister);

// login
router.route('/login').post(userLogin);

// current user
router.route('/current').get(validateToken, currentUser);

// changePassword
router.route("/changePassword").post(validateToken, changePassword);


// sendEmailVerify
router.route("/sendEmailVerify").post(validateToken,sendEmailVerify);
// emailVarify
router.route("/emailVarify").post(emailVarify);


// sendEmailPassword
router.route("/sendEmailPassword").post(sendEmailPassword);
// forgetPassword
router.route("/forgetPassword").post(forgetPassword);

module.exports = router;