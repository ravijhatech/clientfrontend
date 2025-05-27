import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateState = () => {
  const [error, setError] = useState("");
  const stateList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa"
  ];

  const [stateName, setStateName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
   const [users1, setUsers1] = useState([]);
  const [loading, setLoading] = useState('');




  useEffect(() => {
    const fetchStateList = async () => {
      const res = await axios.get('https://clientbackend-9363.onrender.com/api/state/fetch');
      setUsers(res.data);
      setLoading(false);
    };
      fetchStateList();
      

    }, []);



  if (loading) {
    return <p>Loading users...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("Please Wait...")

    const formData = new FormData();
    formData.append('stateName', stateName);


    try {
      const res = await axios.post('https://clientbackend-9363.onrender.com/api/state', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });


      setMessage(res.data.message || 'upload sucessful');
      setIsLoading(false);

      setStateName("");



    } catch (error) {

      console.log(error);
      setMessage('upload failed');
      setIsLoading(false);

    }
  }

  const handlePublish = () => {
    if (!stateInput.trim()) {
      setError("State Name is required");
    } else {
      setError("");
      alert(`Published: ${stateInput}`);
      setStateInput("");
    }
  };

  return (
 <form onSubmit={handleSubmit}>
    <div className="mt-18 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ADD STATE SECTION */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white uppercase mb-4">
            Add State
          </h3>

          <p className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase mb-2">
            State Added Information
          </p>

          <textarea
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            placeholder="Enter state names, separated by commas"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md resize-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
          )} */}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold rounded-md shadow"
          >
            {isLoading ? 'Please Wait..' : "Publish"}
          </button>
        </div>

        {/* STATE LIST SECTION */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white uppercase mb-4">
            State List
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white font-medium">
                <tr>
                  <th className="py-2 px-4">State Name</th>
                  <th className="py-2 px-4">Number of Cities</th>
                </tr>
              </thead>
              <tbody>
                {users.map((state, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-700"
                      }`}
                  >
                    <td className="py-2 px-4">{state.stateName}</td>
                    <td className="py-2 px-4">{users.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex space-x-2 mt-4">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 rounded-md font-medium ${num === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-600 dark:text-white text-gray-800"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Total State: {users.length}
            </p>
            <Link
              to="/state-list"
              className="bg-gray-700 hover:bg-gray-700 text-white px-4 py-1.5 rounded-md"
            >
              All State
            </Link>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default CreateState;
