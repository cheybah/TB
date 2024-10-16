import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchBar.css'

const SearchBar = () => {
const [destination, setDestination] = useState('');
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [rooms, setRooms] = useState(1);
const [childrenAges, setChildrenAges] = useState([]);
const [isOccupancyOpen, setIsOccupancyOpen] = useState(false); // State to manage dropdown visibility


const handleAddChild = () => {
    if (children < 10) {
        setChildren(children + 1);
        setChildrenAges([...childrenAges, '']); // Add a new empty string for age input
    }
};

const handleRemoveChild = () => {
    if (children > 0) {
        setChildren(children - 1);
        setChildrenAges(childrenAges.slice(0, -1)); // Remove last age input
    }
};

const handleAgeChange = (index, age) => {
    const updatedAges = [...childrenAges];
    updatedAges[index] = age; // Update the specific child's age
    setChildrenAges(updatedAges);
};

const handleSearch = () => {
    // Handle the search logic here
    const params = {
        destination,
        startDate,
        endDate,
        adults,
        children,
        rooms,
        childrenAges, // Include ages of children in the search params if needed
    };
    console.log('Search Parameters:', params);
    // Here you can implement your API call or any other search logic
};
return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg1-white rounded-lg shadow-lg adv">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Destination */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Date Range Picker */}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Check-In</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholderText="Start Date"
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Check-Out</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholderText="End Date"
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
            </div>

            {/* Occupancy Dropdown */}
            <div className="relative">
                <label
                    className="block text-sm font-medium text-gray-700 cursor-pointer flex items-center justify-between"
                    onClick={() => setIsOccupancyOpen(!isOccupancyOpen)} // Toggle the dropdown
                >
                    Occupancy
                    <span className={`transform transition-transform duration-300 ${isOccupancyOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </label>
                <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2">
                    {isOccupancyOpen && (
                        <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2 w-full z-10">
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <label>Adults:</label>
                                    <button onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}>-</button>
                                    <span>{adults}</span>
                                    <button onClick={() => setAdults(adults < 30 ? adults + 1 : adults)}>+</button>
                                </div>
                                <div>
                                    <label>Children:</label>
                                    <button onClick={handleRemoveChild} disabled={children === 0}>-</button>
                                    <span>{children}</span>
                                    <button onClick={handleAddChild}>+</button>
                                </div>
                                <div>
                                    <label>Rooms:</label>
                                    <button onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}>-</button>
                                    <span>{rooms}</span>
                                    <button onClick={() => setRooms(rooms < 30 ? rooms + 1 : rooms)}>+</button>
                                </div>
                            </div>
                            {children > 0 && (
                                <div>
                                    <h3 className="text-md font-semibold">Select Ages of Children:</h3>
                                    {childrenAges.map((age, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <span>Child {index + 1} Age:</span>
                                            <input
                                                type="number"
                                                min="0"
                                                max="17"
                                                value={age}
                                                onChange={(e) => handleAgeChange(index, e.target.value)}
                                                className="ml-2 border rounded p-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <button
            onClick={handleSearch}
            className="mt-4 w-36 py-2 bg-pink-700 text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
        >
            Search
        </button>
    </div>
);

};

export default SearchBar;
