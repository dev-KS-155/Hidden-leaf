"use client";

import React, { useState } from "react";
import JsBarcode from 'jsbarcode';

const seatData = [
  { id: "Seat--1A", label: "1A", price: "6,500/-", details: "Free Meal" },
  { id: "Seat--1B", label: "1B", price: "6,500/-", details: "Free Meal" },
  { id: "Seat--2A", label: "2A", price: "5,600/-", details: "Free Meal" },
  { id: "Seat--2B", label: "2B", price: "5,600/-", details: "Free Meal" },
  { id: "Seat--3A", label: "3A", price: "4,000/-", details: "Free Meal" },
  { id: "Seat--3B", label: "3B", price: "4,000/-", details: "Free Meal" },
  { id: "Seat--4A", label: "4A", price: "3,500/-", details: "No " },
  { id: "Seat--4B", label: "4B", price: "3,500/-", details: "" },
  { id: "Seat--5A", label: "5A", price: "3,500/-", details: "" },
  { id: "Seat--5B", label: "5B", price: "3,500/-", details: "" },
];

function Seats() {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats([seatId]);
  };

  const handleBookTickets = () => {
    if (selectedSeats.length === 0) {
      alert("Please select a seat.");
      return;
    }

    if (
      bookingDetails.name.trim() === "" ||
      bookingDetails.phoneNumber.trim() === "" ||
      bookingDetails.email.trim() === ""
    ) {
      alert("Please enter all passenger details.");
      return;
    }

    const selectedSeat = seatData.find((seat) => seat.id === selectedSeats[0]);

    console.log("Selected Seats:", selectedSeats);
    console.log("Passenger Details:", bookingDetails);
    console.log("Selected Seat Price:", selectedSeat.price);
    console.log("Selected Seat Details:", selectedSeat.details);

    // Store details in booking history
    setBookingHistory((prevHistory) => [
      ...prevHistory,
      {
        selectedSeats,
        bookingDetails,
        selectedSeatPrice: selectedSeat.price,
        selectedSeatDetails: selectedSeat.details,
      },
    ]);

    // Clear details after booking
    setBookingDetails({ name: "", phoneNumber: "", email: "" });
    setSelectedSeats([]);
  };

  const handlePrintDetails = () => {
    if (bookingHistory.length === 0) {
      alert("No booking history available for printing.");
      return;
    }

    const printableContent = bookingHistory
      .map(
        (booking, index) => `
          <div key=${index} style="border: 1px solid #ccc; padding: 15px; margin-bottom: 20px;">
            <h2 style="color: #333;">Booking Details - ${index + 1}</h2>
            <p><strong>Name:</strong> ${booking.bookingDetails.name}</p>
            <p><strong>Phone Number:</strong> ${
              booking.bookingDetails.phoneNumber
            }</p>
            <p><strong>Email:</strong> ${booking.bookingDetails.email}</p>
            <p><strong>Selected Seats:</strong> ${booking.selectedSeats.join(
              ", "
            )}</p>
            <p><strong>Selected Seat Price:</strong> ${
              booking.selectedSeatPrice
            }</p>
            <p><strong>Selected Seat Details:</strong> ${
              booking.selectedSeatDetails
            }</p>
          </div>
        `
      )
      .join("");

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Details</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              padding: 20px;
            }
            h2 {
              border-bottom: 2px solid #333;
              padding-bottom: 5px;
              margin-bottom: 10px;
            }
            strong {
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          ${printableContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-400 dark:bg-gray-900 pt-16 pb-16">
      <div className="flex-1 flex items-center justify-center mt-10">
        <div className="bg-gray-200 dark:bg-gray-700 p-12 rounded-md backdrop-blur-md backdrop-filter">
          <ul className="grid grid-cols-5 gap-6 md:grid-cols-2">
            {seatData.map((seat) => (
              <li
                key={seat.id}
                className="hover:shadow-xl hover:scale-[110%] transition-all ease-in-out duration-300 "
              >
                <input
                  type="checkbox"
                  id={seat.id}
                  defaultValue=""
                  className="hidden peer"
                  required=""
                  onChange={() => handleSeatSelection(seat.id)}
                />
                <label
                  htmlFor={seat.id}
                  className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 ${
                    selectedSeats.includes(seat.id)
                      ? "peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      : ""
                  }`}
                >
                  <div className="block">
                    <div className="w-full text-2xl font-extrabold">
                      {seat.label}
                    </div>
                    <div className="w-full text-sm">
                      {seat.price}
                      <br />
                      {seat.details}
                    </div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" rounded-lg backdrop-blur-md backdrop-filter  flex-1  ">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Enter Passenger Details
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 text-opacity-80"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={bookingDetails.name}
              onChange={handleInputChange}
              className="p-2 border rounded-md bg-white text-gray-800 w-3/5"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-800 text-opacity-80"
            >
              Phone Number
            </label>
          
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={bookingDetails.phoneNumber}
              onChange={handleInputChange}
              className="w-3/5 p-2 border rounded-md bg-gray-100 text-gray-800 "
              required
            />
            
              {/* <input
              type="tel"
              
              name="phoneNumber"
              value={bookingDetails.phoneNumber}
              onChange={handleInputChange}
              className="w-3/5 p-2 border rounded-md bg-gray-100 text-gray-800 z-30 "
              
              disabled
              required

              translate-x-[2%] translate-y-[75%] -z-30

            /> */}


          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-opacity-80"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              className="w-3/5 p-2 border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleBookTickets}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Book Tickets
          </button>
          <button
            type="button"
            onClick={handlePrintDetails}
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600"
          >
            Print Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default Seats;
