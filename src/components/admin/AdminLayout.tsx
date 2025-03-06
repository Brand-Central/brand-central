
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Layout, 
  FileText, 
  Users, 
  Mail, 
  Home, 
  LogOut, 
  Menu,
  MessageSquare,
  PanelLeft
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { path: '/admin/pages', label: 'Pages', icon: <FileText className="h-5 w-5" /> },
    { path: '/admin/contact-submissions', label: 'Contact Messages', icon: <MessageSquare className="h-5 w-5" /> },
    { path: '/admin/subscribers', label: 'Subscribers', icon: <Mail className="h-5 w-5" /> },
    { path: '/admin/users', label: 'Users', icon: <Users className="h-5 w-5" /> },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="h-full flex flex-col">
            <div className="p-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Layout className="h-5 w-5 text-brandcentral-accent" />
                <span>Brandcentral CMS</span>
              </div>
            </div>
            <Separator />
            
            <nav className="flex-1 p-4 space-y-1">
              {navigationItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-brandcentral-accent/10 text-brandcentral-accent font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <Separator />
            
            <div className="p-4">
              <Link 
                to="/"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-2"
              >
                <PanelLeft className="h-5 w-5" />
                View Website
              </Link>
              
              <Button
                variant="outline"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Layout className="h-5 w-5 text-brandcentral-accent" />
            <span>Brandcentral CMS</span>
          </div>
        </div>
        <Separator />
        
        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                location.pathname === item.path 
                  ? 'bg-brandcentral-accent/10 text-brandcentral-accent font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        
        <Separator />
        
        <div className="p-4">
          <Link 
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-2"
          >
            <PanelLeft className="h-5 w-5" />
            View Website
          </Link>
          
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            {navigationItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>
          
          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-brandcentral-accent text-white">
                    {user.email ? getInitials(user.email) : 'BC'}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
