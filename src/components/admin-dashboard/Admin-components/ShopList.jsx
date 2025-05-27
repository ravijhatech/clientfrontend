import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStore,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data
const dummyData = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  shopId: `SID-${3000 + index}`,
  shopName: `Shop ${index + 1}`,
  Category: `Category ${index + 1}`,
  SubCategory: `SubCategory ${index + 1}`,
  contact: `98765${index}4321`,
  address: "Noida sector 63 U.P",
}));

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const paginatedData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-center">
        <h2 className="text-2xl w-44 font-semibold text-gray-900 dark:text-white flex items-center space-x-3 mb-6 lg:mb-0">
          <FaStore className="text-gray-700 dark:text-white" />
          <span>Shop List</span>
        </h2>

        <div className="flex flex-row gap-2 items-center">
          <select
            name=""
            id=""
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="category1">Category 1</option>
          </select>
          <select
            name=""
            id=""
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Sub Category</option>
            <option value="subcategory1">Sub Category 1</option>
          </select>
          <select
            name=""
            id=""
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select State</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
          <input
            type="search"
            placeholder="Search"
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            to="/add-shop"
            className="px-6 p-2.5 w-80 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPlus className="inline-block text-sm mr-2" />
            Add
          </Link>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-4" />

      {/* Table */}
      <div className="overflow-x-auto mt-4 rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3">Logo</th>
              <th className="px-6 py-3">Shop Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Sub Category</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Banner</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((shop, index) => (
              <tr
                key={shop.id}
                className="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Shop profile"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                </td>

                <td className="px-6 py-4">{shop.shopName}</td>
                <td className="px-6 py-4">{shop.Category}</td>
                <td className="px-6 py-4">{shop.SubCategory}</td>
                <td className="px-6 py-4">{shop.contact}</td>
                <td className="px-6 py-4">{shop.address}</td>
                <td className="px-6 py-4">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Shop profile"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      aria-label="Edit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FaEdit className="text-base" />
                    </button>
                    <button
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

export default ShopList;
