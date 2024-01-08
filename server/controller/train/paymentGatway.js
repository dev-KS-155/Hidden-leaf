const asyncHandler = require('express-async-handler')
const useFullData = require('../../usefullData');
const User = require('../../models/userModels');

const stripe = require('@stripe/stripe-js')(usefullData.StripeSecretkey);

const paymentGatway = asyncHandler(async (req, res) => {

    const { classType, fromStationCode, quota, toStationCode, trainName, trainNo, journey_date, price } = req.body;
    const userID = req.userAvaliable.id;
    const user = await User.findById(userID)

    if (!user) {
        res.status(404);
        throw new Error("User are not found");
    }

    list_items = {
        price_deatil: {
            currency: "inr",
            basic_deatil: {
                name: user.name,
                trainNo: trainNo,
                trainName: trainName,
                classType: classType,
                fromStationCode: fromStationCode,
                quota: quota,
                toStationCode: toStationCode,
                journey_date:journey_date
            },
            price: price
        },
        quantity: 1
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["cards"],
        line_items: list_items,
        mode: "payment",
        success_url: "http://example.com/success",
        cancel_url: "https://example.com/cancel",
    });

    res.status(200).json({
        id: session.id,
        detail: list_items,
        isCorrect: true
    })
})