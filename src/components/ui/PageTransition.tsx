
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    // Start progress bar
    NProgress.start();
    
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300); // Match with CSS duration
      
      return () => clearTimeout(timeout);
    }
    
    // Complete progress bar when content is loaded
    if (transitionStage === 'fadeIn') {
      NProgress.done();
      
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out min-h-screen ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
