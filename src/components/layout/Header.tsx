
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Case Studies', path: '/case-studies' },
  { title: 'How It Works', path: '/how-it-works' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-glass shadow-subtle' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center font-medium text-xl"
        >
          <span className="text-brandcentral-900 font-semibold tracking-tight">Brand</span>
          <span className="text-brandcentral-accent">central</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'relative py-2 text-sm font-medium transition-custom',
                location.pathname === item.path
                  ? 'text-brandcentral-900'
                  : 'text-brandcentral-500 hover:text-brandcentral-900',
                'after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-brandcentral-accent after:left-0 after:-bottom-1 after:transition-all after:duration-300',
                location.pathname === item.path && 'after:w-full'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Call to Action Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center px-5 py-2 text-sm font-medium text-white bg-brandcentral-accent rounded-md shadow-sm transition-custom hover:bg-brandcentral-accent/90"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="p-2 md:hidden relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-brandcentral-900" />
          ) : (
            <Menu className="h-6 w-6 text-brandcentral-900" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden fixed inset-0 bg-white z-[5] flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          )}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {menuItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-lg font-medium transition-custom',
                  location.pathname === item.path 
                    ? 'text-brandcentral-accent' 
                    : 'text-brandcentral-800',
                  isMenuOpen ? 'animate-fade-in' : 'animate-fade-out',
                )}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                'mt-4 px-6 py-3 text-white bg-brandcentral-accent rounded-md shadow-sm transition-custom',
                isMenuOpen ? 'animate-fade-in' : 'animate-fade-out'
              )}
              style={{ animationDelay: '300ms' }}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
