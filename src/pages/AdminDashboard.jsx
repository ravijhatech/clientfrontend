import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AdminMain from "../components/admin-dashboard/AdminMain";
import AdminHeader from "../components/admin-dashboard/AdminHeader";
import AdminSidebar from "../components/admin-dashboard/AdminSidebar";

const Admindashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

  

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // const handleLogoutClick = async () => {
  //   try {
  //     const response = await handlerLogout();
  //     if (!response?.ok) {
  //       const errorData = await response.json();
  //       toast.error(errorData.message || "Failed to log out.", {
  //         autoClose: 3000,
  //       });
  //       return;
  //     }

  //     toast.success("Logged out successfully!", {
  //       autoClose: 1000,
  //       onClose: () => navigate("/signin"),
  //     });
  //   } catch (error) {
  //     toast.error(error.message || "Failed to log out. Please try again.", {
  //       autoClose: 3000,
  //     });
  //   }
  // };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* <ToastContainer /> */}
      {isSidebarOpen && <AdminSidebar />}
      <div className="flex flex-col flex-grow">
        <AdminHeader
          toggleSidebar={toggleSidebar}
          // handleLogout={handleLogoutClick}
          // user={user}
        />
        <div
          className={`transition-all duration-300 mt-2 p-3 ${
            isSidebarOpen ? "sm:ml-64" : "ml-0"
          }`}
        >
          <AdminMain loginUser={user} />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
