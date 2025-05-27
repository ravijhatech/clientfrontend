import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateCity = () => {
  const [selectedState, setSelectedState] = useState("");
  const [error, setError] = useState("");
  const [cityList, setCityList] = useState([]);

   const [cityName, setCityName] = useState('');
   const [cityInput, setCityInput] = useState("");
    const [isLoading ,setIsLoading] =useState(false);
    const [message,setMessage] = useState('');
   const [users, setUsers] = useState([]); 
    const [loading , setLoading] = useState('');
  
  


  useEffect(() => {
    fetch('https://clientbackend-9363.onrender.com/api/city/fetch')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });

  
  }, []);


  if (loading) {
    return <p>Loading users...</p>;
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsLoading(true);
      setMessage("Please Wait...")
  
      const formData = new FormData();
      formData.append('cityName', cityName);
      formData.append('cityInput',cityInput);
  
      try {
        const res = await axios.post('http://localhost:5000/api/city', formData, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });
       
        
        setMessage(res.data.message || 'upload sucessful');
        setIsLoading(false);
  
        setCityName("");
        setCityInput("");
  
  
      } catch (error) {
  
        console.log(error);
        setMessage('upload failed');
        setIsLoading(false);
  
      }
    }
  

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  ];

  const handlePublish = () => {
    if (!selectedState || !cityInput.trim()) {
      setError("Please select a state and enter at least one city.");
      return;
    }

    const cities = cityInput.split(",").map((city) => city.trim()).filter(Boolean);
    if (cities.length === 0) {
      setError("Please enter valid city names.");
      return;
    }

    const updatedCities = [...cityList, ...cities.map(city => ({ name: city, state: selectedState }))];
    setCityList(updatedCities);
    setCityInput("");
    setSelectedState("");
    setError("");
  };

  return (
    <form  onSubmit={handleSubmit} >
    <div className="mt-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* City Input Section */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-md shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-md font-bold text-gray-800 dark:text-white uppercase mb-4">
            Add Sub-Category
          </h2>

          <p className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 mb-2">
            City Added Information
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 dark:text-white">Select State:</label>
            <select
               value={cityName}
              onChange={(e)=>setCityName(e.target.value)}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <textarea
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city names, separated by commas"
            rows={4}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        {/* Actions */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
          <p className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 mb-2">Post Actions</p>
          <button
            onClick={handlePublish}
            className="mt-auto px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold rounded-md shadow"
          >
               {isLoading? 'Please Wait..':"Publish"}
          </button>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="flex justify-between items-center mt-8 bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-md shadow">
        
          
        
        <p className="text-md font-semibold text-gray-800 dark:text-white">
         
          Total Cities: {users.length}
        </p>
        
        <Link
          to="/city-list"
          className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-md hover:bg-gray-700"
        >
          All Cities
        </Link>
      </div>
    </div>
    </form>
  );
};

export default CreateCity;
