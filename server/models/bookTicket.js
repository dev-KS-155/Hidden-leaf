const mongodb = require('mongoose');
const BookTicket = new mongodb.Schema({
    user_id: {
        type: mongodb.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    isBooked: {
        type: Boolean,
        required: true,
        default: false,
    },
    train: {
        seatNumber: {
            type: Number,
            required: true,
        },
        trainNo: {
            type: String,
            required: true,
        },
        classType: {
            type: String,
            required: true,
        },
        fromStationCode: {
            type: String,
            required: true,
        },
        quota: {
            type: String,
            required: true,
        },
        toStationCode: {
            type: String,
            required: true,
        },
        journey_date: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        book_date: {
            type: Date,
            required: true,
        },
        update_date: {
            type: Date,
        }
    },
    // fight: {
    //     seatNumber: {
    //         type: Number,
    //         required: true,
    //     },
    //     price: {
    //         type: Number,
    //         required: true,
    //     },
    //     isMealBooked: {
    //         type: Boolean,
    //         required: true,
    //         default: false,
    //     }
    // }
})

module.exports = mongodb.model('BookedTicket', BookTicket);