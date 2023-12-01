"use client";
import React, { useEffect, useState } from 'react';
import { Card } from './Card';
export default function Trainslist() {
  const [filterClass, setFilterClass] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const CLASS = ["1A", "2A", "3A", "SL", "GN"];
  const data = [
    { CName: "GN", Amount: "200" },
    { CName: "SL", Amount: "345" },
    { CName: "3A", Amount: "1345" },
    { CName: "2A", Amount: "1845" },
    { CName: "1A", Amount: "2345" }
  ];

  // Filter by class
  const filterByClass = (item) => {
    return filterClass.length === 0 || filterClass.includes(item.CName);
  };

  // Filter by price range
  const filterByPrice = (item) => {
    const price = parseInt(item.Amount);
    return ((minPrice && price >= parseInt(minPrice)) || !minPrice) &&
      ((maxPrice && price <= parseInt(maxPrice)) || !maxPrice);
  };

  const filteredData = data.filter((item) => {
    return filterByClass(item) && filterByPrice(item);
  });

  const handleClassChange = (className) => {
    const updatedFilters = filterClass.includes(className)
      ? filterClass.filter((item) => item !== className)
      : [...filterClass, className];
    setFilterClass(updatedFilters);
  };

  return (
    <div className="flex flex-row bg-slate-100 py-10 px-16 max-h-screen overflow-hidden border rounded-xl shadow shadow-gray-50 ml-6 mr-6 mb-6 ">
      <div className="w-1/4 mt-10 p-3 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Filter by Class</h1>
          {CLASS.map((item, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                onChange={() => handleClassChange(item)}
                checked={filterClass.includes(item)}
                className="font-semibold mx-3"
              />
              {item}
            </label>
          ))}
          <h1 className="text-2xl font-bold mt-3">Filter by Price</h1>
          <div>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border-2 rounded-lg p-2 mt-2"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border-2 rounded-lg p-2 mt-2"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 overflow-y-auto pr-4 rounded-lg">
        {filteredData.length === 0 ? (
          <p className="text-3xl text-red-600 top-[30%] right-1/4 left-1/4 absolute text-center">No trains match the selected criteria.</p>
        ) : (
            <>
              <Card data={filteredData} />
              <Card data={filteredData} />
              <Card data={filteredData} /></>
          )}
      </div>
    </div>
  );
}
