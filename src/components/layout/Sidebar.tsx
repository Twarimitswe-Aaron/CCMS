import { HomeIcon, UserGroupIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Users', href: '/dashboard/users', icon: UserGroupIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: DocumentTextIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
];

export default function Sidebar() {
  return (
    <div className="">hello</div>
  )
} 