import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { FaFileExport } from 'react-icons/fa'; // Example icon

// Placeholder components for sections - replace with actual components later
const OverviewMetrics = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h3 className="text-lg font-semibold text-gray-700">Metric Title</h3>
    <p className="text-xl font-bold text-gray-900">Value</p>
  </div>
);
const ComplaintsResolvedChart = () => <div className="flex items-center justify-center h-full text-gray-500">Complaints Resolved Chart Placeholder</div>;
const AvgResolutionTimeChart = () => <div className="flex items-center justify-center h-full text-gray-500">Avg Resolution Time Chart Placeholder</div>;
const DistrictPerformanceTable = () => <div className="flex items-center justify-center h-full text-gray-500">District Performance Table Placeholder</div>;
const DistrictPerformanceMap = () => <div className="flex items-center justify-center h-full text-gray-500">District Performance Map Placeholder</div>;
const InsightsRecommendations = () => <div className="flex items-center justify-center h-full text-gray-500">Insights & Recommendations Placeholder</div>;
const AlertsNotifications = () => <div className="flex items-center justify-center h-full text-gray-500">Alerts & Notifications Placeholder</div>;

export default function AdminDashboard() {
  const { role } = useUser();

  // Redirect if the user is not an admin
  if (role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Area */} 
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-gray-900">District Performance Overview</h1>
        {/* Filters and Actions */} 
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
           {/* Date Picker Placeholder */} 
          <select className="border rounded-md p-2 w-full md:w-auto"> <option>Last 30 days</option> </select>
           {/* Category Filter Placeholder */} 
          <select className="border rounded-md p-2 w-full md:w-auto"> <option>All Categories</option> </select>
           {/* District Filter Placeholder */} 
          <select className="border rounded-md p-2 w-full md:w-auto"> <option>All Districts</option> </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 w-full md:w-auto">
             <FaFileExport />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Top Row Metrics */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewMetrics />
        <OverviewMetrics />
        <OverviewMetrics />
        <OverviewMetrics />
      </div>

      {/* Charts Row */} 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white p-4 shadow rounded-lg h-96"> <ComplaintsResolvedChart /> </div>
         <div className="bg-white p-4 shadow rounded-lg h-96"> <AvgResolutionTimeChart /> </div>
      </div>

      {/* Table and Insights Row */} 
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white p-4 shadow rounded-lg"> <DistrictPerformanceTable /> </div>
         <div className="bg-white p-4 shadow rounded-lg"> <InsightsRecommendations /> </div>
       </div>

      {/* Map and Alerts Row */} 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white p-4 shadow rounded-lg h-96"> <DistrictPerformanceMap /> </div>
         <div className="bg-white p-4 shadow rounded-lg"> <AlertsNotifications /> </div>
      </div>

    </div>
  );
} 