import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {

  const [categoryName , setCategoryName] = useState('');
  const [sequence , setSequence] = useState("");
  const [image , setImage] = useState(null);
  const [isLoading ,setIsLoading] = useState(false);
  const [message,setMessage] = useState('');
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
      setIsLoading(true);
      setMessage("Please Wait...")

    const formData = new FormData();
    formData.append('categoryName',categoryName);
    formData.append('addSequence',sequence);
    formData.append('uploadFile',image);

     try {
    const res = await axios.post('https://clientbackend-9363.onrender.com/api/add-category', formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      },
    });
    setMessage(res.data.message || 'upload sucessful');
         setIsLoading(false);
    
    setSequence("");
    setCategoryName("");
    setImage("");

  } catch (error) {
    
    console.log(error);
    setMessage('upload failed');
     setIsLoading(false);
    
  }
  }

 
  return (
    <form onSubmit={handleSubmit}>
    <div className="mt-18 px-4">
      <h5 className="text-xl font-semibold  text-gray-800 dark:text-white mb-6">Add Category</h5>
      <div className="flex flex-col  md:flex-row gap-4">
        {/* Category Form Section */}
        <div className="w-full md:w-2/3 bg-white border rounded-lg border-gray-200 p-4">
          <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase">
            Category Added Information
          </h5>
          <hr className="text-gray-300 " />

          <div className="mt-8">
            {/* Category Name Input */}
            <label htmlFor="categoryInput" className="block text-sm font-medium  text-gray-700 dark:text-white">
              Category Name
            </label>
            <input
            value={sequence}
            onChange={(e)=>setSequence(e.target.value)}
              type="text"
              id="categoryInput"
              name="category"
              className="w-full p-2 dark:text-slate-100 border-b  border-gray-300 focus:outline-none focus:ring-0 mt-2"
              placeholder="Enter Category name"
            />
          </div>

          <div className="mt-6">
            {/* Add Sequence Input */}
            <label htmlFor="sequenceInput" className="block text-sm  font-medium text-gray-700 dark:text-white">
              Add Sequence
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e)=>setCategoryName(e.target.value)}
              id="sequenceInput"
              name="sequence"
              className="w-full p-2 dark:text-slate-100 border-b border-gray-300 focus:outline-none focus:ring-0 mt-2"
              placeholder="Enter Add Sequence"
            />
          </div>
        </div>

        {/* Post Actions Section */}
        <div className="w-full md:w-1/3 bg-white border rounded-lg border-gray-200 p-4">
          <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase">Post actions</h5>

          {/* Publish Button */}
          <button type="submit" className="bg-blue-600 p-2 text-white rounded-md w-full md:w-32 cursor-pointer hover:bg-blue-700 transition"
          disabled={isLoading}
          >
            {isLoading? 'Please Wait..':"Publish"}
          </button>

          {/* Upload File Section */}
          <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-4 uppercase mt-6">Upload File</h5>
          <div className="w-full border rounded-lg border-gray-200 p-4">
            <label
              htmlFor="file-upload"
              className="w-full flex items-center justify-center py-3 px-4 border-2 border-gray-300 border-dashed rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              <span className="text-sm text-gray-700 dark:text-white">Choose a file to upload</span>
              <input
                type="file"
                accept="uploadFile/*"
                onChange={(e)=> setImage(e.target.files[0])}
                id="file-upload"
                name="file-upload"
                className="hidden"
              />
            </label>
           
          </div>
        </div>
      </div>
    </div>
     {message && (
            <p style={{ justifyContent:'center',alignItems:'center'}}>{message}</p>
            )}
    </form>
  );
};

export default AddCategory;
