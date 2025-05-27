import React, { useState } from "react";

const CreateBanner = () => {
  const [form, setForm] = useState({
    sequence: "",
    bannerNo: "",
    category: "",
    subcategory: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Banner:", form);
  };

  return (
    <div className="mt-18 px-6 bg-white dark:bg-gray-800 rounded-lg p-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-gray-600 uppercase">
            General Information
          </h3>
          <input
            required
            name="sequence"
            value={form.sequence}
            onChange={handleChange}
            placeholder="Sequence"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
          />
          <input
            required
            name="bannerNo"
            value={form.bannerNo}
            onChange={handleChange}
            placeholder="Banner No"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
          />

          <div className="mt-6 p-4  border border-gray-300 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
              Post Actions
            </h3>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-md hover:opacity-90"
            >
              Publish
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase mb-1">
              Select Category
            </h3>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent"
            >
              <option value="">Select</option>
              <option value="Deals">Deals</option>
              <option value="Offers">Offers</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase mb-1">
              Select Sub Category
            </h3>
            <select
              name="subcategory"
              value={form.subcategory}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent"
            >
              <option value="">Select Subcategory</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase mt-6">
              Upload File
            </h5>
            <div className="w-60 border rounded-lg border-gray-200 p-4">
              <label
                htmlFor="file-upload"
                className="w-full flex items-center justify-center py-3 px-4 border-2 border-gray-300 border-dashed rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              >
                <span className="text-sm text-gray-700 dark:text-white">
                  Choose a file to upload
                </span>
                <input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBanner;
