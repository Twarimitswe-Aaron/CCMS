import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import {
  FaFileExport,
  FaUsers,
  FaChartPie,
  FaChartBar,
  FaTable,
  FaMapMarkedAlt,
  FaClipboardList,
  FaCog,
  FaBell,
  FaShieldAlt,
  FaQuestion,
} from "react-icons/fa"; // Icons for admin dashboard
import {
  FiUser,
  FiHome,
  FiBarChart2,
  FiClipboard,
  FiSettings,
  FiRefreshCcw,
  FiAlertCircle,
  FiBell as FiBellOutline,
  FiLock,
} from "react-icons/fi"; // Icons from the sidebar image
import AdminMetricsSection from "./AdminMetricsSection";
import ComplaintsStatusSection from "./ComplaintsStatusSection";
import AdminChartsSection from "./AdminChartsSection";

// Placeholder components for admin dashboard sections
const AdminOverviewMetrics = () => (
  <div className="bg-white p-4 border-2 border-gray-500 shadow rounded-lg flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">Metric Title</p>
      <p className="text-2xl font-bold text-gray-900">Value</p>
      <p className="text-xs text-gray-500 mt-1">
        <span className="text-green-500">▲ X%</span> vs last month
      </p>
    </div>
    <div className="text-blue-500">
      <FiUser size={24} />
    </div>{" "}
    {/* Placeholder icon */}
  </div>
);

const ComplaintsByStatus = () => (
  <div className="bg-white p-4 border-1 border-gray-300  shadow rounded-lg">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Complaints by Status
    </h3>
    {/* Placeholder for status cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-gray-600">Pending</p>
        <p className="text-xl font-bold text-blue-700">XXX</p>
      </div>
      <div className="p-3 bg-yellow-50 rounded-md">
        <p className="text-sm text-gray-600">In Review</p>
        <p className="text-xl font-bold text-yellow-700">XXX</p>
      </div>
      <div className="p-3 bg-purple-50 rounded-md">
        <p className="text-sm text-gray-600">In Progress</p>
        <p className="text-xl font-bold text-purple-700">XXX</p>
      </div>
      <div className="p-3 bg-green-50 rounded-md">
        <p className="text-sm text-gray-600">Resolved</p>
        <p className="text-xl font-bold text-green-700">XXX</p>
      </div>
    </div>
  </div>
);

const ComplaintsByCategory = () => (
  <div className="bg-white p-4 border-1 border-gray-300  shadow rounded-lg h-80 flex items-center justify-center text-gray-500">
    Complaints by Category Chart Placeholder
  </div>
);

const ComplaintsByProvince = () => (
  <div className="bg-white p-4 shadow border-1 border-gray-300  rounded-lg h-80 flex items-center justify-center text-gray-500">
    Complaints by Province Chart Placeholder
  </div>
);

const ComplaintsTrend = () => (
  <div className="bg-white p-4 shadow border-1 border-gray-300  rounded-lg h-80 flex items-center justify-center text-gray-500">
    Complaints Trend Chart Placeholder
  </div>
);

const DashboardContent = () => {
  const { role } = useUser();
  // Assuming a state for notification count, replace with actual logic
  const [notificationCount] = useState(8); // Example count based on the image

  return (
    <div className="px-3">
      {/* Admin Dashboard Content */}
      {role === "admin" && (
        <div className="">
          {/* Header with Title and Filters */}
          <div className="flex flex-col border-1 rounded-md p-2 bg-white mb-5 border-gray-300  sticky top-0 md:flex-row items-start md:items-center justify-between ">
            <div className="block">
              <h1 className="text-xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-500 text-sm">System monitoting and Analytics</p>
            </div>
            <div className="flex items-center space-x-4 p-4">
              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                {/* Bell icon with notification count */}
                <div className="relative">
                  <FaBell size={16} className="text-gray-400" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </div>

                {/* Question Mark */}
                <FaQuestion size={16} className="text-gray-400" />

                {/* Gear */}
                <FaCog size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border border-gray-300 mb-4 rounded-md bg-white">
            {/* Filters and Export Button */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="block ">
                <p className="text-gray-500">Time Range</p>
                <select className="border border-gray-300  rounded-md p-2 text-sm">
               
                <option className="text-black">Last 30 Days</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Location </p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
              
                <option className="">All locations</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Category</p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
                
                <option>All categories</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Institution</p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
               
                <option>All institutions</option>
              </select>
              </div>
             
            </div>
           <div className="block">
           <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2">
              <FaFileExport /> <span>Export Report</span>
            </button>
           </div>
          </div>

          {/* Metrics Row */}
          <AdminMetricsSection />

          {/* Complaints by Status */}
          <ComplaintsStatusSection />

          {/* Charts Row */}
          <AdminChartsSection />

          {/* Insights & Recommendations, Alerts & Notifications - Add these sections if needed */}
        </div>
      )}

      {/* Officer Dashboard Content */}
      {role === "officer" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Officer Dashboard Content</h2>
          <p>Content specific to the Officer role goes here.</p>
        </div>
      )}

      {/* Citizen Dashboard Content */}
      {role === "citizen" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Citizen Dashboard Content</h2>
          <p>Content specific to the Citizen role goes here.</p>
        </div>
      )}

      {/* Default Content (if role is not recognized or set) */}
      {!["admin", "officer", "citizen"].includes(role) && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Select a role or log in to see specific content.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
