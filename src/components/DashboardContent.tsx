import React from 'react';
import { useUser } from '../contexts/UserContext';

export default function DashboardContent() {
  const { role } = useUser();

  return (
    <div className="p-6">
      {role === 'admin' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard Content</h2>
          <p>Content specific to the Admin role goes here.</p>
          {/* Admin specific components will be placed here */} 
        </div>
      )}

      {role === 'officer' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Officer Dashboard Content</h2>
          <p>Content specific to the Officer role goes here.</p>
          {/* Officer specific components will be placed here */} 
        </div>
      )}

      {role === 'citizen' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Citizen Dashboard Content</h2>
          <p>Content specific to the Citizen role goes here.</p>
          {/* Citizen specific components will be placed here */} 
        </div>
      )}

      {!['admin', 'officer', 'citizen'].includes(role) && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Select a role or log in to see specific content.</p>
        </div>
      )}
    </div>
  );
} 