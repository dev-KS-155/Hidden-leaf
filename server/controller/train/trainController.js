const asyncHandler = require('express-async-handler')
const axios = require('axios');
const useFullData = require('../../usefullData')

const serachTrain = asyncHandler(async (req, res) => {

  const { fromStationCode, toStationCode, dateOfJourney } = req.body

  let serachTrainData = null;
  let tarin_id = [];
  let tarin_schedule = [];

  //serach_train
  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
    params: {
      fromStationCode: fromStationCode,
      toStationCode: toStationCode,
      dateOfJourney: dateOfJourney
    },
    headers: {
      'X-RapidAPI-Key': useFullData.XRapidAPIKey,
      'X-RapidAPI-Host': useFullData.XRapidAPIHost
    }
  };
  const response_serchTrain = await axios.request(options);
  if (!response_serchTrain) {
    res.status(404);
    throw new Error("Train are not present in this route")
  }
  serachTrainData = response_serchTrain.data;

  serachTrainData.data.forEach((value, index) => {
    tarin_id.push(value.train_number);
  })
  res.status(200).json({
    "serachTrainData": serachTrainData,
    "tarin_id": tarin_id,
    "tarin_schedule": tarin_schedule,
    message: 'Train search completed successfully.'
  })

})

const viewRoute = asyncHandler(async (req, res) => {

  const { trainNo, startDay } = req.body;

  // view_route
  let view_route = null;
  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus',
    params: {
      trainNo: trainNo,
      startDay: startDay
    },
    headers: {
      'X-RapidAPI-Key': useFullData.XRapidAPIKey,
      'X-RapidAPI-Host': useFullData.XRapidAPIHost
    }
  };
  const response = await axios.request(options);
  if (!response || !response.data) {
    res.status(404);
    throw new Error("some thing went wrong")
  }
  view_route = response.data;
  view_route = response.data;

  res.status(200).json({
    "view_route": view_route,
    message: "Avibility route search completed successfully"
  })

})


const pnrChecker = asyncHandler(async (req, res) => {

  const { pnrNumber } = req.body;

  let pnr_info = null;
  // pnr check
  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
    params: {
      pnrNumber: pnrNumber
    },
    headers: {
      'X-RapidAPI-Key': useFullData.XRapidAPIKey,
      'X-RapidAPI-Host': useFullData.XRapidAPIHost
    }
  };

  const response = await axios.request(options);
  if (!response || !response.data) {
    res.status(400);
    throw new Error("Pnr_user are not found!");
  }
  pnr_info = response.data;

  res.status(200).json({
    "pnr_info": pnr_info,
    message: "PNR search completed successfully"
  })
})

module.exports = { serachTrain, viewRoute, pnrChecker }