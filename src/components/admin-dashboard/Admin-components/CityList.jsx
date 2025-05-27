import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCity,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const dummyData = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  cityId: `CID-${2000 + index}`,
  cityName: `City ${index + 1}`,
  state: `State ${index + 1}`,
  pincode: `5600${index + 1}`,
  status: index % 2 === 0 ? "Active" : "Inactive",
}));

const CityList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]); 
  const itemsPerPage = 5;
  const [loading ,setLoading] =useState(false); 

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const paginatedData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  
    useEffect(() => {

      const fetchCity = async ()=>{
        const res = await axios.get('https://clientbackend-9363.onrender.com/api/city/fetch');
        setUsers(res.data);
          setLoading(false);
      };
      fetchCity();
    
    }, []);
  
  
    if (loading) {
      return <p>Loading City...</p>;
    }


    
  //delete 

  const handleDelete = async (id)=>{
    try {
       const res =await axios.delete(`https://clientbackend-9363.onrender.com/api/city/${id}`);
       console.log(res);
       
      setUsers(users.filter(city => city.id !== id));
      alert("City Deleted Sucessfully");
    } catch (error) {
      console.error('Deleted Error',error)
    }
  };

  

  return (
    <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-3 mb-6 lg:mb-0">
          <FaCity className="text-gray-700 dark:text-white" />
          <span>City List</span>
        </h2>

        <div className="flex flex-row gap-3 items-center">
          <input
            type="search"
            placeholder="Search"
            className="w-80 p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link to="/create-city" className="px-6 p-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaPlus className="inline-block text-sm mr-2" />
            Add New City
          </Link>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-4" />

      {/* Table */}
      <div className="overflow-x-auto mt-4 rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3">S.NO</th>
              <th className="px-6 py-3">City Name</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((city, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-6 py-4">{city.cityName}</td>
               
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      aria-label="Edit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FaEdit className="text-base" />
                    </button>
                    <button  onClick={()=> handleDelete(city._id)}
                      aria-label="Delete"
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      <FaTrash className="text-base" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {Math.min(currentPage * itemsPerPage, dummyData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {dummyData.length}
          </span>{" "}
          entries
        </span>

        <div className="inline-flex mt-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 disabled:opacity-50"
          >
            <FaArrowLeft className="mr-1" /> Prev
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="flex items-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-l border-gray-700 rounded-e hover:bg-gray-900 disabled:opacity-50"
          >
            Next <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityList;
