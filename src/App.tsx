import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import AdminDashboard from './pages/AdminDashboard';
import { useUser } from './contexts/UserContext';

// Helper component to redirect non-admins from admin path
function AdminRoute({ element }: { element: React.ReactElement }) {
  const { role } = useUser();
  if (role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  return element;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route
              path="admin"
              element={<AdminRoute element={<AdminDashboard />} />}
            />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;



