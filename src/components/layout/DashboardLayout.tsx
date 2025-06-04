import React from 'react';
import { Outlet } from 'react-router-dom';


export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar (Placeholder) */} 
      <div className="w-16 bg-gray-800 flex flex-col items-center py-4 hidden md:flex">
        {/* Icons and Navigation will go here */} 
        <div className="text-white">Nav</div>
      </div>
      {/* Main Content Area */} 
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <Outlet /> {/* This is where the specific role content will render */} 
      </main>
    </div>
  );
} 