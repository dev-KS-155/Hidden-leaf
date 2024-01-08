const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validatedToken/validatedToken')
const { serachTrain, viewRoute, pnrChecker } = require('../controller/train/trainController');
const { checkSeatAvailabilityAndGetFare, bookTicketUser, cancelTicket, changeTravelingDate } = require('../controller/train/ticketBooked');

router.route('/searchTrain').get(serachTrain);
router.route("/checkSeatAvailabilityAndGetFare").get(checkSeatAvailabilityAndGetFare);
router.route("/viewRoute").get(viewRoute);
router.route("/pnrChecker").get(pnrChecker);


router.route("/bookTicketUser").post(validateToken,bookTicketUser);
router.route("/cancelTicket").get(validateToken,cancelTicket);
router.route("/changeTravelingDate").post(validateToken,changeTravelingDate);

module.exports = router