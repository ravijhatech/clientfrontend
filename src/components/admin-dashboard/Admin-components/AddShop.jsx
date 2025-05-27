import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const AddShop = () => {
  const [images, setImages] = useState(Array(5).fill(null));

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <div className="mt-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT SECTION */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
        <h3 className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300 mb-4">
          General Information
        </h3>
        {[
          "Shop Name",
          "Company Name",
          "Reg No",
          "Mobile",
          "Email",
          "Location & Address",
          "About Shop",
          "#Tag",
          "Password",
        ].map((label, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={label}
            className="w-full mb-3 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
        {[
          "Select Category",
          "Select Subcategory",
          "Select State",
          "Select City",
        ].map((label, idx) => (
          <select
            key={idx}
            className="w-full mb-3 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          >
            <option>{label}</option>
          </select>
        ))}

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Upload logo and banner*
          </label>
          <input
            type="number"
            defaultValue={5}
            className="w-20 p-2 mb-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md focus:outline-none text-sm"
          />
          <div className="grid grid-cols-5 gap-2 mb-3">
            {images.slice(0, 4).map((img, idx) => (
              <label
                key={idx}
                className="flex justify-center items-center h-24 bg-gray-100 dark:bg-gray-700 rounded-md border cursor-pointer"
              >
                {img ? (
                  <img
                    src={img}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <FaCamera className="text-2xl text-blue-600" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, idx)}
                />
              </label>
            ))}
          </div>

          <label className="flex justify-center items-center h-24 bg-gray-100 dark:bg-gray-700 rounded-md border cursor-pointer">
            {images[4] ? (
              <img
                src={images[4]}
                alt="Preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <FaCamera className="text-2xl text-blue-600" />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 4)}
            />
          </label>
        </div>

        <button className="mt-4 px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900">
          Upload Images
        </button>
      </div>
    </div>
  );
};

export default AddShop;
