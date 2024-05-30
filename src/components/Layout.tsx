// components/Layout.tsx
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="w-full h-20 bg-white shadow-md">
        {/* Topbar content */}
      </div>
      {/* Container for Sidebar and Main Content */}
      <div className="flex flex-1 bg-[#EBF0F5]">
        <div className="w-full max-w-[1115px] mx-auto flex flex-row py-5 md:gap-2">
          {/* Sidebar */}
          <div className="w-80 bg-white h-full rounded-xl hidden md:block shadow-lg">
            {/* Sidebar content */}
          </div>
          {/* Main content */}
          <div className="flex-1 overflow-auto md:ps-3 md:pt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
