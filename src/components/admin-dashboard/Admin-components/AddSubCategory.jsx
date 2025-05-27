import axios from "axios";
import React, { useEffect, useState } from "react";

const AddSubCategory = () => {
  const [selectCategory , setselectCategory] = useState('');
   const [subCategory , setSubCategory] = useState('');
  const [addSequence , setAddSequence] = useState("");
  const [formTpe , setFormTpe] = useState("");
  const [iconImg , seticonImg] = useState(null);
  const [isLoading ,setIsLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [users , setUsers] = useState([]);
  

       useEffect(() => {
    
          const fetchSubCategory = async ()=>{
            const res = await axios.get('https://clientbackend-9363.onrender.com/api/add-sub-category/fetch');
            setUsers(res.data);
             
          };
          fetchSubCategory();
        
        }, []);
      
      

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
      setIsLoading(true);
      setMessage("Please Wait...")

    const formData = new FormData();
    formData.append('selectCategory',selectCategory);
    formData.append('subCategoryName',subCategory);
    formData.append('addSequence',addSequence);
    formData.append('addFormType',formTpe);
    formData.append('iconUrl',iconImg);

     try {
    const res = await axios.post('https://clientbackend-9363.onrender.com/api/add-sub-category', formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      },
    });
    setMessage(res.data.message || 'upload sucessful');
         setIsLoading(false);
    setAddSequence(""),
    setFormTpe(""),
    setSubCategory(""),
    setselectCategory("")

  } catch (error) {
    
    console.log(error);
    setMessage('upload failed');
     setIsLoading(false);
    
  }
  }

  return (
    <div className="mt-18 px-6 bg-white dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Add Sub-Category</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* LEFT BLOCK */}
        <div className="md:col-span-2 border border-gray-300 rounded-md p-6 space-y-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase">
            Category Added Information
          </h4>

          {/* Select Category */}
          <div>
            <label className="block text-sm mb-1">Select Category:</label>
            <select
              name="category"
              value={selectCategory}
              onChange={(e)=>setselectCategory(e.target.value)}
              required
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent"
            >
              <option value="">Select category</option>
              <option value="Deals">Deals</option>
              <option value="Offers">Offers</option>
            </select>
          </div>

          {/* Sub-Category Name */}
          <div>
            <label className="block text-sm mb-1">Sub-Category Name</label>
            <input
              name="subCategoryName"
              value={subCategory}
              onChange={(e)=>setSubCategory(e.target.value)}
              placeholder="Sub-Category Name"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>

          {/* Sequence */}
          <div>
            <label className="block text-sm mb-1">Add Sequence</label>
            <input
              name="sequence"
               value={addSequence}
              onChange={(e)=>setAddSequence(e.target.value)}
              placeholder="Add Sequence"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>

          {/* Form Type */}
          <div>
            <label className="block text-sm mb-1">Add FormType:</label>
            <select
              name="formType"
              value={formTpe}
              onChange={(e)=>setFormTpe(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent"
            >
              <option value="">Select Form Type</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="space-y-6">
          {/* Submit */}
          <div className="border border-gray-300 rounded-md p-6">
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Post Actions
            </h4>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-md hover:opacity-90"
            >
              {isLoading? 'Please Wait..':"Publish"}
            </button>
          </div>

          {/* File Upload */}
          <div className="border border-gray-300 rounded-md p-6 pt-0">
           <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase mt-6">Add Icon</h5>
          <div className="w-full border rounded-lg border-gray-200 p-4">
            <label
              htmlFor="file-upload"
              className="w-full flex items-center justify-center py-3 px-4 border-2 border-gray-300 border-dashed rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              <span className="text-sm text-gray-700 dark:text-white">Choose a file to upload</span>
              <input
                accept="iconUrl/*"
                onChange={(e)=> seticonImg(e.target.files[0])}
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

      {/* Footer Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded-md flex justify-between items-center">
        <p className="text-base font-semibold text-gray-800">
          Total Sub-categories: <span className="font-bold">{users.length}</span>
        </p>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-900">
          All Sub-categories
        </button>
      </div>
    </div>
  );
};

export default AddSubCategory;
