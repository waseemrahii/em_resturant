import React, { useState } from 'react';
// import Map from './Map'; // Ensure the correct path to the Map component

const Drivers = () => {
  const drivers = [
    { name: "Ali Khan", status: "Available", location: { lat: 40.7128, lng: -74.0060 } }, // New York
    { name: "Ahmed Raza", status: "Available", location: { lat: 34.0522, lng: -118.2437 } }, // Los Angeles
    { name: "Sara Ali", status: "Available", location: { lat: 41.8781, lng: -87.6298 } }, // Chicago
    { name: "Mustafa Anwer", status: "Available", location: { lat: 29.7604, lng: -95.3698 } }, // Houston
    { name: "John Doe", status: "Available", location: { lat: 33.4484, lng: -112.0740 } }, // Phoenix
    { name: "Ahmed Raza", status: "Available", location: { lat: 39.9526, lng: -75.1652 } }, // Philadelphia
    { name: "Sara Ali", status: "Available", location: { lat: 29.4241, lng: -98.4936 } }, // San Antonio
    { name: "Mustafa Anwer", status: "Available", location: { lat: 32.7157, lng: -117.1611 } }, // San Diego
    { name: "John Doe", status: "Available", location: { lat: 32.7767, lng: -96.7970 } }, // Dallas
    { name: "Ali Khan", status: "Available", location: { lat: 37.7749, lng: -122.4194 } }, // San Francisco
    // Pakistani cities
    { name: "Ali Khan", status: "Available", location: { lat: 24.8607, lng: 67.0011 } }, // Karachi
    { name: "Ahmed Raza", status: "Available", location: { lat: 31.5497, lng: 74.3436 } }, // Lahore
    { name: "Sara Ali", status: "Available", location: { lat: 30.3753, lng: 69.3451 } }, // Multan
    { name: "Mustafa Anwer", status: "Available", location: { lat: 33.6844, lng: 73.0479 } }, // Islamabad
    { name: "John Doe", status: "Available", location: { lat: 25.1982, lng: 62.3213 } }, // Quetta
    { name: "Ahmed Raza", status: "Available", location: { lat: 35.2220, lng: 74.3454 } }, // Muzaffarabad
    { name: "Sara Ali", status: "Available", location: { lat: 34.0151, lng: 71.5249 } }, // Peshawar
    { name: "Mustafa Anwer", status: "Available", location: { lat: 30.1798, lng: 66.9750 } }, // Sukkur
    { name: "John Doe", status: "Available", location: { lat: 27.1767, lng: 78.0081 } }, // Hyderabad
    { name: "Ali Khan", status: "Available", location: { lat: 33.6844, lng: 73.0479 } }, // Rawalpindi
  ];

  const [selectedLocation, setSelectedLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to New York
  const [activeDriver, setActiveDriver] = useState(null); // State to track the active driver

  const handleClick = (location, index) => {
    setSelectedLocation(location);
    setActiveDriver(index);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="overflow-auto scrollbar-hide h-[70vh] w-full md:w-1/3">
          {drivers.map((driver, index) => (
            <div
              key={index}
              onClick={() => handleClick(driver.location, index)}
              className={`pl-2 flex flex-col border-b gap-4 py-2 rounded-l-lg cursor-pointer hover:bg-primary-100 ${
                activeDriver === index ? 'bg-primary-100' : ''
              }`}
            >
              <div className="flex font-semibold text-gray-500 text-sm gap-2">
                <span>Driver Name: </span>
                <span>{driver.name}</span>
              </div>
              <div className="bg-green-400 text-white text-sm text-center rounded-full font-semibold w-28 px-2 py-1">
                {driver.status}
              </div>
            </div>
          ))}
        </div>
        <div className="h-[70vh] w-full rounded bg-primary-100">
          {/* <Map location={selectedLocation}/> */}
        </div>
      </div>
    </>
  );
};

export default Drivers;