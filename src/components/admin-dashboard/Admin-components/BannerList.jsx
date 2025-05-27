import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaImage,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const dummyBannerData = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `Banner Title ${index + 1}`,
  category: `Category ${index + 1}`,
  subcategory: `SubCategory ${index + 1}`,
  link: `https://example.com/banner${index + 1}`,
  image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
}));

const BannerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyBannerData.length / itemsPerPage);
  const paginatedData = dummyBannerData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-16 px-6 py-6 border border-gray-200 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <FaImage />
          <span>Banner List</span>
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4 rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-base font-bold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Sub Category</th>
              <th className="px-6 py-3">Link</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((banner) => (
              <tr
                key={banner.id}
                className="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  <img
                    src={banner.image}
                    alt="Banner"
                    className="w-16 h-16 rounded object-cover border border-gray-300"
                  />
                </td>
                <td className="px-6 py-4">{banner.title}</td>
                <td className="px-6 py-4">{banner.category}</td>
                <td className="px-6 py-4">{banner.subcategory}</td>
                <td className="px-6 py-4">
                  <a href={banner.link} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                    View
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      <FaTrash />
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
            {Math.min(currentPage * itemsPerPage, dummyBannerData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {dummyBannerData.length}
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

export default BannerList;
