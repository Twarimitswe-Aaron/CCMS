import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt, FaBuilding, FaFileAlt, FaChartBar,
  FaSearch, FaList, FaHistory, FaTools, FaBell, FaShieldAlt
} from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import type { ChangeEvent } from 'react';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const [notifications] = useState(12);

  const menuItems = [
    { icon: FaTachometerAlt, label: 'Dashboard', link: '/dashboard' },
    { icon: FaBuilding, label: 'Institutions', link: '/dashboard/institutions' },
    { icon: FaFileAlt, label: 'Complaints', link: '/dashboard/complaints' },
    { icon: FaChartBar, label: 'Analytics', link: '/dashboard/analytics' },
    { icon: FaSearch, label: 'Compliance Tracker', link: '/dashboard/compliance' },
    { icon: FaList, label: 'Category Management', link: '/dashboard/categories' },
    { icon: FaHistory, label: 'Audit Logs', link: '/dashboard/audit-logs' },
    { icon: FaTools, label: 'Admin Tools', link: '/dashboard/admin-tools' },
    { icon: FaBell, label: 'Notifications', link: '/dashboard/notifications', badge: notifications },
    { icon: FaShieldAlt, label: 'Security', link: '/dashboard/security' },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <aside className="w-64 bg-white text-gray-900 border-r border-gray-200 flex flex-col justify-between p-4 shadow-md">
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">CCMS Admin</h2>
          <p className="text-sm text-gray-500">Citizen Complaint Management</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-2 top-2.5 text-gray-500">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-8 pr-2 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center px-3 py-2 rounded-md transition-all text-sm font-medium group ${
                  isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <item.icon size={18} className={`mr-3 text-gray-600 group-hover:text-blue-600 transition-colors`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center p-2 rounded-md bg-gray-50">
          <FiUser size={20} className="mr-3 text-gray-500" />
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">System Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;