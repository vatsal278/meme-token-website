import React, { useState, useEffect } from 'react';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const Logo = ({ show, logoSrc }) => {
  const [tilt, setTilt] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setTilt(true);
      }, 1000); // Tilt after 1 second
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <img
        src={logoSrc}
        alt="Logo"
        className={`w-64 h-auto mb-8 transform ${tilt ? 'rotate-12' : ''}`} // Adjust rotation angle (e.g., rotate-12)
      />
      <SocialMediaButtons />
    </div>
  );
};

export default Logo;