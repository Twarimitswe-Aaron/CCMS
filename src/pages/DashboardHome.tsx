import { useUser } from '../contexts/UserContext';

export default function DashboardHome() {
  const { role } = useUser();

  return (
    <div>
      <h1 className="text-xl font-semibold  text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to the CCMS Dashboard</p>
      <div className="mt-4">
        <p>Current Role: <span className="font-medium">{role}</span></p>
      </div>
    </div>
  );
} 