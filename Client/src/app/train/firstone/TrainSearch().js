 "use client"
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

export  const TrainSearch=({men,women}) =>{

  const [cities, setCities] = useState([
   { name: "Lucknow" }, {  name: "Uttarakhand" }, {  name: "Kanpur"}, {  name: "Mumbai" },{  name: "Delhi"},{ name: "Punjab" },{ name: "Adoni"},{  name: "Amaravati"},{  name: "Anantapur"},{name: "Chandragiri"}, {  name: "Chittoor"},{  name: "Dowlaiswaram"},{  name: "Visakhapatnam"},{  name: "Vizianagaram"},{ name: "Yemmiganur" }, {   name: "Vijayawada" }, {   name: "Tirupati" }, {   name: " Alappuzha" }, {   name: "Vatakara"},{  name: " Idukki"},{  name: "Kannur"        },{  name: " Thrissur"},{  name: " Thiruvananthapuram" }, {   name: "Thalassery" }, {   name: "Kottayam" }, {   name: "Agra" }, {   name: "Aligarh"},
   {   name: "dehradun" }, {   name: "haridwar" }, {   name: "rishikesh"}, {   name: "Jamuu kasmhir" }, {   name: "Chennai" }, {   name: "Merrut"},
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [noMatches, setNoMatches] = useState(false);

     // Configure the fuzzy search options
  const fuseOptions = {
    keys: ['name'],
    threshold: 0.4,
  };

  const fuse = new Fuse(cities, fuseOptions);

  useEffect(() => {
    if (searchQuery) {
      const results = fuse.search(searchQuery);
      setSearchResults(results.map((result) => result.item));
      setNoMatches(results.length === 0);
    } else {
      setSearchResults([]);
      setNoMatches(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery && !men) {
      const randomIndex = Math.floor(Math.random() * cities.length);
      women(cities[randomIndex].name);
    }
  }, [searchQuery,men, cities]);

  const handleCitySelection = (cityName) => {
    setDropdownVisible(false);
    women(cityName);
    setSearchQuery('');
  };

  const handleInputClick = () => {
    setDropdownVisible(true);
  };
   // State to track the input value
   const [inputValue, setInputValue] = useState('');

   // State to track whether the input is focused
   const [isInputFocused, setIsInputFocused] = useState(false);
   // Event handler for input focus
   const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  // Event handler for input blur
  const handleInputBlur = () => {
    setIsInputFocused(false);
    // Additional code to clear the input value or close the dropdown
    setInputValue('');
    // Additional code to close the dropdown if you have one
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/3 relative">
        <input
          type="text"
          placeholder="Enter the city name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className=" w-full p-2 border-2 border-slate-400 bg-slate-100 hover:border-slate-500 rounded-lg duration-300"
        />
        {dropdownVisible && searchQuery && isInputFocused && (
          <div className="mt-2 p-3 border-2 border-neutral-800 rounded-lg bg-slate-50 absolute w-full">
            {searchResults.length === 0 && noMatches ? (
              <div>No matching cities found.</div>
            ) : (
              searchResults.map((city, index) => (
                <div key={index} className="city-card hover:bg-slate-200 cursor-pointer p-1 rounded-lg">
                  <h3 onClick={() => handleCitySelection(city.name)} >{city.name}</h3>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="sm:pl-5 mt-2 sm:mt-0">
        <h1 className="text-2xl sm:text-1xl md:2xl font-semibold">{men}</h1>
      </div>
    </div>
  );
}

