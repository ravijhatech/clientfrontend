import React from "react";
import AddCategory from "./Admin-components/AddCategory";
import SubCategory from "./Admin-components/SubCategory";
import { Route, Routes } from "react-router-dom";
import UserChart from "./Admin-components/UserChart";
import Products from "./Admin-components/Products";
import Users from "./Admin-components/Users";
import AddNewUser from "./Admin-components/AddNewUser";
import CreateState from "./Admin-components/CreateState";
import StateList from "./Admin-components/StateList";
import CityList from "./Admin-components/CityList";
import CreateCity from "./Admin-components/CreateCity";
import ShopList from "./Admin-components/ShopList";
import AddShop from "./Admin-components/AddShop";
import ShopBannerList from "./Admin-components/ShopBannerList";
import CreateShopBanner from "./Admin-components/CreateShopBanner";
import BannerList from "./Admin-components/BannerList";
import CreateBanner from "./Admin-components/CreateBanner";
import AddSubCategory from "./Admin-components/AddSubCategory";
import DashboardSetting from "./Admin-components/DashboardSetting";

const AdminMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/sub-category" element={<SubCategory />} />
      <Route path="/add-sub-category" element={<AddSubCategory />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-new-user" element={<AddNewUser />} />
      <Route path="/create-state" element={<CreateState />} />
      <Route path="/create-city" element={<CreateCity />} />
      <Route path="/state-list" element={<StateList />} />
      <Route path="/city-list" element={<CityList />} />
      <Route path="/shop-list" element={<ShopList />} />
      <Route path="/add-shop" element={<AddShop />} />
      <Route path="/create-shop-banner" element={<CreateShopBanner />} />
      <Route path="/shop-banner-list" element={<ShopBannerList />} />
      <Route path="/create-banner" element={<CreateBanner />} />
      <Route path="/banner-list" element={<BannerList />} />
      <Route path="/settings" element={<DashboardSetting />} />







    </Routes>
  );
};

export default AdminMain;

const Dashboard = () => {
  return (
    <div className="mt-16 px-4">
      <h5 className="text-xl font-semibold  text-gray-800 dark:text-white mb-6">
        Dashboard
      </h5>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 mb-6">
          <div className="border border-gray-200 bg-white dark:bg-gray-800  rounded-lg p-4  cursor-pointer transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Users</h3>
            <p className="text-gray-600 dark:text-gray-400 text-2xl font-medium">345</p>
          </div>
          <div className="border border-gray-200 bg-white dark:bg-gray-800  rounded-lg p-4  cursor-pointer transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ads</h3>
            <p className="text-gray-600 dark:text-gray-400 text-2xl font-medium">495</p>
          </div>
          <div className="border border-gray-200 bg-white dark:bg-gray-800  rounded-lg p-4  cursor-pointer transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Business Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-2xl font-medium">97</p>
          </div>
          <div className="border border-gray-200 bg-white dark:bg-gray-800  rounded-lg p-4  cursor-pointer transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Banners</h3>
            <p className="text-gray-600 dark:text-gray-400 text-2xl font-medium">69</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full rounded-lg p-3.5 bg-white  dark:bg-gray-900 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full">
              <label
                htmlFor="state1"
                className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
              >
                State
              </label>
              <select
                id="state1"
                name="state1"
                className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:text-slate-100 text-gray-700"
              >
                <option value="">Select State</option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
              >
                City
              </label>
              <select
                id="city"
                name="city"
                className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:text-slate-100 text-gray-700"
              >
                <option value="">Select City</option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="state2"
                className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
              >
                Select Date Range
              </label>
              <select
                id="state2"
                name="state2"
                className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:text-slate-100 text-gray-700 "
              >
                <option value="">Monthly</option>
              </select>
            </div>
          </div>

          <div className="w-full  p-4 bg-white border dark:bg-gray-800 border-gray-200 rounded-lg">
            <UserChart />
          </div>
        </div>
      </div>
    </div>
  );
};
