import axios from "axios";
import React, { useState } from "react";

const AddNewUser = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading ,setIsLoading] =useState(false);
  const [message,setMessage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("Please Wait...")

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('mobileNumber', mobile);
    formData.append('country', country);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('gender', gender);

    try {
      const res = await axios.post('https://clientbackend-9363.onrender.com/api/add-new-user', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
     
      
      setMessage(res.data.message || 'upload sucessful');
      setIsLoading(false);

      setFirstName("");
      setLastName("");
      setCity("");
      setCountry("");
      setEmail("");
      setGender("");
      setMobile("");
      setState("");
      setPassword("");
     


    } catch (error) {

      console.log(error);
      setMessage('upload failed');
      setIsLoading(false);

    }
  }

  return (
    
    <div className="mt-18 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Add New User
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            First Name
          </label>
          <input
           value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Last Name
          </label>
          <input
          value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label
            htmlFor="mobile"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Mobile Number
          </label>
          <input
          value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            type="number"
            maxLength={10}
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile No."
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Email ID
          </label>
          <input
          value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email ID"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label
            htmlFor="country"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Country
          </label>
          <select 
            id="country"
            name="country"
            value={country}
              onChange={(e)=>setCountry(e.target.value)}
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label
            htmlFor="state"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            State
          </label>
          <select
           value={state}
              onChange={(e)=>setState(e.target.value)}
            id="state"
            name="state"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>
              Select State
            </option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="California">California</option>
          </select>
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            City
          </label>
          <select
           value={city}
              onChange={(e)=>setCity(e.target.value)}
            id="city"
            name="city"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label
            htmlFor="gender"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Gender
          </label>
          <select
           value={gender}
              onChange={(e)=>setGender(e.target.value)}
            id="gender"
            name="gender"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue=""
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-2.5 border border-gray-300 dark:text-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button - spans both columns */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
             {isLoading? 'Please Wait..':" Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
