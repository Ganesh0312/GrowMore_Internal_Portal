import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`p-4 ${isSidebarOpen ? "sm:ml-64" : ""} transition-all`}>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-blue-600 rounded-lg dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
