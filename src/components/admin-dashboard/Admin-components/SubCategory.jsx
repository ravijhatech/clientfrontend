import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaFolder, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import { Link } from "react-router-dom";

const dummyData = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  category: `Category ${index + 1}`,
  subCategory: `SubCategory ${index + 1}`,
  sequence: index + 1,
}));

const SubCategory = () => {
   const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const paginatedData = dummyData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    fetch('https://clientbackend-9363.onrender.com/api/add-sub-category/fetch')
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
       await axios.delete(`https://clientbackend-9363.onrender.com/api/add-sub-category/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("Sub Category Deleted Sucessfully");
    } catch (error) {
      console.error('Deleted Error',error)
    }
  };

  return (
    <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center space-x-3 mb-6 lg:mb-0">
          <FaFolder className="text-gray-700" />
          <span className="dark:text-white">Sub Categories</span>
        </h2>

        <div className="flex flex-row gap-3 items-center">
          <div className="mb-4">
            <select className="w-full p-[12px] border border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select a Category</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="search"
              placeholder="Search Sub Categories"
              className="w-full p-2.5 border border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end mb-4">
            <Link to="/add-sub-category" className="px-6 p-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaPlus className="inline-block text-sm mr-2" />
              Add
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="w-full mt-5">
        <div className="overflow-x-auto mt-6 rounded-lg bg-white dark:bg-gray-800">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
            <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3">S.NO</th>
                <th className="px-6 py-3">
                  <button type="button" className="flex items-center space-x-1 focus:outline-none">
                    <span>Category Name</span>
                    <TiArrowUnsorted className="text-base" />
                  </button>
                </th>
                <th className="px-6 py-3">
                  <button type="button" className="flex items-center space-x-1 focus:outline-none">
                    <span>Sub Category Name</span>
                    <TiArrowUnsorted className="text-base" />
                  </button>
                </th>
                <th className="px-6 py-3">
                  <button type="button" className="flex items-center space-x-1 focus:outline-none">
                    <span>Add Sequence</span>
                    <TiArrowUnsorted className="text-base" />
                  </button>
                </th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              
              {users.map((user,index) => (
                
                <tr
                  key={index}
                  className="bg-white cursor-pointer border-b border-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-6 py-4">{user.selectCategory}</td>
                  <td className="px-6 py-4">{user.subCategoryName}</td>
                  <td className="px-6 py-4">{user.addSequence}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        aria-label="Edit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      >
                        <FaEdit className="text-base" />
                      </button>
                      <button
                      onClick={()=> handleDelete(user._id)}
                        aria-label="Delete"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400"
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

        {/* Pagination Footer */}
        <div className="flex flex-row justify-between mb-5 p-5 items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {Math.min(currentPage * itemsPerPage, users.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {users.length}
            </span>{" "}
            Entries
          </span>

          <div className="inline-flex mt-2 xs:mt-0">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 disabled:opacity-50"
            >
              <FaArrowLeft className="text-sm me-1" />
              Prev
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 disabled:opacity-50"
            >
              Next
              <FaArrowRight className="text-sm mx-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
