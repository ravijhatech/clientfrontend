import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";

const dummyStates = [
  { id: 1, name: "Andhra Pradesh", cities: 12 },
  { id: 2, name: "Arunachal Pradesh", cities: 5 },
  { id: 3, name: "Assam", cities: 9 },
  { id: 4, name: "Bihar", cities: 10 },
  { id: 5, name: "Chhattisgarh", cities: 6 },
  { id: 6, name: "Delhi", cities: 8 },
  { id: 7, name: "Goa", cities: 3 },
];

const StateList = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [loading, setLoading] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyStates.length / itemsPerPage);
  const paginatedStates = dummyStates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {

    const fetchCity = async () => {
      const [cityRes, stateRes] = await Promise.all([
           axios.get('https://clientbackend-9363.onrender.com/api/state/fetch'),
            
          ]);

          console.log(stateRes.data);
          
setUsers(cityRes.data);
setUsers1(stateRes.data);
setLoading(false);
        };
fetchCity();
      
      }, []);






//delete 

const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`https://clientbackend-9363.onrender.com/api/state/${id}`);

    setUsers(users.filter(state => state.id !== id));
    alert("Deleted Sucessfully");
  } catch (error) {
    console.error('Deleted Error', error)
  }
};


return (
  <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
    <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-900 flex items-center space-x-3 mb-6 lg:mb-0 dark:text-white">
        <span>State List</span>
      </h2>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="search"
          placeholder="Search States"
          className="p-2.5 w-80  border border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="px-6 p-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FaPlus className="inline-block text-sm mr-2" />
          Add State
        </button>
      </div>
    </div>

    <hr className="border-gray-300 my-4" />

    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
        <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">S.NO</th>
            <th className="px-6 py-3 flex items-center">
              <span>State Name</span>
              <TiArrowUnsorted className="ml-1 text-base" />
            </th>
            <th className="px-6 py-3">Number of Cities</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((state, index) => (
            <tr
              key={index}
              className="bg-white border-b border-gray-100 cursor-pointer hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-4">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-6 py-4">{state.stateName}</td>
              {users1.map((user , index) =>
                <td key={index} className="px-6 py-4">{user.cityName}</td>
              )}
              
              
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(state._id)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md">
                    <FaTrash />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination Footer */}
    <div className="flex justify-between items-center mt-6">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * itemsPerPage + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {Math.min(currentPage * itemsPerPage, dummyStates.length)}
        </span>{" "}
        of <span className="font-semibold">{dummyStates.length}</span> entries
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
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="flex items-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-l border-gray-700 rounded-e hover:bg-gray-900 disabled:opacity-50"
        >
          Next <FaArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  </div>
);
};

export default StateList;
