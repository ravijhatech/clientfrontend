import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { sidebarLinks } from "../../utils/SidebarData";

const SidebarLink = ({ item, onClick, isOpen }) => (
  <div>
    {item.href ? (
      <Link to={item.href}>
        <button
          className="flex items-center w-full p-2 text-gray-900 transition rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          onClick={onClick}
        >
          <item.icon className="text-xl" />
          <span className="flex-1 ms-3 text-left">{item.label}</span>
          {item.dropdown && <IoIosArrowDown />}
        </button>
      </Link>
    ) : (
      <button
        className="flex items-center w-full p-2 text-gray-900 transition rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={onClick}
      >
        <item.icon className="text-xl" />
        <span className="flex-1 ms-3 text-left">{item.label}</span>
        {item.dropdown && <IoIosArrowDown />}
      </button>
    )}

    {isOpen && item.dropdown && (
      <ul className="py-2 space-y-2">
        {item.dropdown.map((subItem, index) => (
          <li key={index}>
            {subItem.href ? (
              <Link
                to={subItem.href}
                className="flex items-center w-full p-2 text-gray-900 transition rounded-lg cursor-pointer pl-8 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <subItem.icon className="text-xl mx-2 mb-1" />
                {subItem.label}
              </Link>
            ) : (
              <div className="flex items-center w-full p-2 text-gray-900 transition rounded-lg  pl-8 cursor-default dark:text-white">
                <subItem.icon className="text-xl mx-2 mb-1" />
                {subItem.label}
              </div>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const AdminSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showBetaBox, setShowBetaBox] = useState(true);



  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow dark:bg-gray-800 sm:translate-x-0">
      <div className="h-[calc(100vh-4rem)] mt-16 px-3 py-4 overflow-y-hidden group hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <ul className="space-y-2 font-normal text-base">
          {sidebarLinks.map((item, index) => (
            <li key={index}>
              <SidebarLink
                item={item}
                onClick={() =>
                  setOpenDropdown((prev) =>
                    prev === item.label ? null : item.label
                  )
                }
                isOpen={openDropdown === item.label}
              />
            </li>
          ))}
        </ul>
        {showBetaBox && (
          <div
            className="p-4 mt-6 rounded-lg bg-blue-600 dark:bg-blue-900"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2.5 py-0.5 rounded-md">
                Beta
              </span>
              <button
                type="button"
                className="ms-auto flex justify-center items-center w-6 h-6 rounded-lg focus:ring-2 focus:ring-blue-400 dark:hover:bg-blue-800"
                onClick={() => setShowBetaBox(false)}
              >
                <IoIosClose className="text-2xl text-white" />
              </button>
            </div>
            <p className="text-sm text-white dark:text-blue-400">
              Preview the new dashboard navigation! You can turn it off in your
              profile.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;
