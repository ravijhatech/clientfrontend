import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUser,
  FaPlus,
  FaTrash,
  FaEdit,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const dummyData = Array.from({ length: 7 }, (_, index) => ({
  // id: index + 1,
  // userId: `UID-${1000 + index}`,
  // name: `User ${index + 1}`,
  // mobile: `98765${index}4321`,
  // email: `user${index + 1}@example.com`,
  // address: `Address ${index + 1}, City`,
  // status: index % 2 === 0 ? "Active" : "Inactive",
}));

const Users = () => {
     const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const paginatedData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


    useEffect(() => {
      fetch('https://clientbackend-9363.onrender.com/api/add-new-user/fetch')
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
  
  
    //delete 
  
    const handleDelete = async (id)=>{
      try {
         await axios.delete(`https://clientbackend-9363.onrender.com/api/add-new-user/${id}`);
        setUsers(users.filter(user => user.id !== id));
        alert("User Deleted Sucessfully");
      } catch (error) {
        console.error('Deleted Error',error)
      }
    };
  
  return (
    <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center space-x-3 mb-6 lg:mb-0">
          <FaUser className="text-gray-700" />
          <span className="dark:text-white">Total Users</span>
        </h2>

        <div className="flex flex-row gap-3 items-center">
          <input
            type="search"
            placeholder="Search"
            className="w-80 p-2.5 border border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Link to="/add-new-user" className="px-6 p-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaPlus className="inline-block text-sm mr-2" />
            Add New User
          </Link>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Table */}
      <div className="overflow-x-auto mt-4 rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3">S.NO</th>
              <th className="px-6 py-3">ID No.</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Mobile No.</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
             {users.map((user,index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-100 cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                 <td className="px-6 py-4"> {`UID-${1000 + index + 1}`}</td> 
                <td className="px-6 py-4">{user.firstName}</td>
                <td className="px-6 py-4">{user.mobileNumber}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.state}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      aria-label="Edit"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FaEye className="text-base" />
                    </button>
                    <button
                      aria-label="Edit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FaEdit className="text-base" />
                    </button>
                    <button
                     onClick={()=> handleDelete(user._id)}
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

export default Users;
