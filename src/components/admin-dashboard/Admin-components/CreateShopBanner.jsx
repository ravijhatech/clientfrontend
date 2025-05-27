import React, { useState } from "react";

const CreateShopBanner = () => {
  const [form, setForm] = useState({
    businessName: "",
    sequence: "",
    link: "",
    bannerNo: "",
    mobile: "",
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
    console.log("Banner submitted:", form);
  };

  return (
    <div className="mt-18 px-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white shadow-md rounded-md mt-10"
      >
        {/* Left Column: Form Fields */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-700 uppercase">
            General Information
          </h3>
          {[
            { name: "businessName", placeholder: "Business name" },
            { name: "sequence", placeholder: "Sequence" },
            { name: "link", placeholder: "Link" },
            { name: "bannerNo", placeholder: "Banner No" },
            { name: "mobile", placeholder: "Mobile" },
          ].map((field) => (
            <input
              key={field.name}
              required
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            />
          ))}
        </div>

        {/* Right Column: Actions and Selects */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
              Post Actions
            </h3>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-md hover:opacity-90"
            >
              Publish
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-1">
              Select Category
            </h3>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            >
              <option value="">Select</option>
              <option value="Deals">Deals</option>
              <option value="Offers">Offers</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-1">
              Select Sub Category
            </h3>
            <select
              name="subcategory"
              value={form.subcategory}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            >
              <option value="">Select sub Subcategory</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase mt-6">
              Upload File
            </h5>
            <div className="w-full border rounded-lg border-gray-200 p-4">
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

export default CreateShopBanner;
