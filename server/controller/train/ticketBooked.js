const asyncHandler = require('express-async-handler')
const axios = require('axios');
const useFullData = require('../../usefullData')
const BookedTicket = require('../../models/bookTicket')

const checkSeatAvailabilityAndGetFare = asyncHandler(async (req, res) => {
  const { classType, fromStationCode, quota, toStationCode, trainNo, date } = req.body;
  let train_avibility = null;

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
    params: {
      classType: classType,
      fromStationCode: fromStationCode,
      quota: quota,
      toStationCode: toStationCode,
      trainNo: trainNo,
      date: date
    },
    headers: {
      'X-RapidAPI-Key': useFullData.XRapidAPIKey,
      'X-RapidAPI-Host': useFullData.XRapidAPIHost
    }
  };
  const response = await axios.request(options);
  if (!response || !response.data) {
    res.status(404);
    throw new Error("does not find any avibility seat")
  }
  train_avibility = response.data;
  res.status(200).json({
    "train_avibility": train_avibility,
    message: "Seat avibility search completed successfully",
    isCorrect: true
  })
})


const bookTicketUser = asyncHandler(async (req, res) => {

  const { classType, fromStationCode, quota, toStationCode, trainNo, journey_date, price } = req.body;

  if (!classType || !fromStationCode || !quota || !toStationCode || !trainNo || !journey_date || !price) {
    res.status(404);
    throw new Error("Missing required fields");
  }
  const seatNumber = Math.floor(Math.random() * 90) + 1;
  const coachNumber = Math.floor(Math.random() * 8) + 1;
  const classTypeWithCoach = classType +'-'+ coachNumber;
  
  const userBookTicket = await BookedTicket.create({
    user_id: req.userAvaliable.id,
    isBooked: true,
    train: {
      seatNumber,
      trainNo,
      classType: classTypeWithCoach,
      fromStationCode,
      quota,
      toStationCode,
      journey_date,
      price,
      book_date: Date.now()
    }
  })

  if (!userBookTicket || userBookTicket.data) {
    res.status(500);
    throw new Error("Serever error");
  }

  res.status(200).json({
    "UserBooked": userBookTicket,
    message: "Ticked booked succesffully",
    isCorrect: true
  })
})

const changeTravelingDate = asyncHandler(async (req, res) => {

  const { changeDate } = req.body;

  const user = req.userAvaliable;
  const isBookedUser = await BookedTicket.findOne({ user_id: user.id });
  if (!isBookedUser || isBookedUser.isBooked === false) {
    res.status(404);
    throw new Error("User are not booked the ticket")
  }
  
  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
    params: {
      classType: isBookedUser.train.classType,
      fromStationCode: isBookedUser.train.fromStationCode,
      quota: isBookedUser.train.quota,
      toStationCode: isBookedUser.train.toStationCode,
      trainNo: isBookedUser.train.trainNo,
      date: changeDate
    },
    headers: {
      'X-RapidAPI-Key': useFullData.XRapidAPIKey,
      'X-RapidAPI-Host': useFullData.XRapidAPIHost
    }
  };

  const response = await axios.request(options);
  if (!response || !response.data) {
    res.status(404);
    throw new Error("does not find any avibility seat")
  }

  const currentDate = Date.now();
  const journeyDateObj = new Date(isBookedUser.train.journey_date);
  journeyDateObj.setDate(journeyDateObj.getDate() - 3);

  if (currentDate < journeyDateObj) {
    console.log(changeDate)
    isBookedUser.train.journey_date = changeDate;
    isBookedUser.train.update_date = Date.now();
    await isBookedUser.save();

    res.status(200).json({
      "user": isBookedUser,
      message: "Successfully updated TravelingDate",
      isCorrect: true
    })
  } else {
    res.status(400);
    throw new Error("TravelingDate can only be updated 3 days before journey_date");
  }
})

const cancelTicket = asyncHandler(async (req, res) => {

  const user = req.userAvaliable;

  const isBookedUser = await BookedTicket.findOne({ user_id: user.id });
  if (!isBookedUser) {
    res.status(404);
    throw new Error("User are not booked the ticket")
  }

  const currentDate = Date.now();
  const journeyDateObj = new Date(isBookedUser.train.journey_date);

  journeyDateObj.setDate(journeyDateObj.getDate() - 2);

  if (currentDate < journeyDateObj) {
    
    isBookedUser.isBooked = false;
    await isBookedUser.save();

    // await BookedTicket.deleteOne({user_id : req.userAvaliable.id})

    res.status(200).json({
      message: "Successfully cancel the  Ticket",
      isCorrect: true
    })
  } else {
    res.status(400);
    throw new Error("Cancelation can only be done 2 days before journey_date");
  }
})

module.exports = { checkSeatAvailabilityAndGetFare, bookTicketUser , cancelTicket ,changeTravelingDate}