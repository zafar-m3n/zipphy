import React, { useState, useRef } from "react";
import { navMenu } from "@/data/data";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo-white.png";
import logoDark from "@/assets/logo-dark.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  // Ref to track submenu close timeout
  const submenuTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(submenuTimeout.current); // Clear any existing timeout
    setOpenDesktopMenu(index);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 300);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-primary text-background shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Zipphy Logo" className="h-20" />
          </a>
          <p className="items-center hidden md:flex text-sm text-accent me-6">
            <span className="text-2xl italic me-1">18 </span> years
          </p>
          <nav className="hidden md:flex space-x-6">
            {navMenu.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={item.link || "#"} className="hover:text-accent transition-colors flex items-center space-x-1">
                  <span>{item.title}</span>
                  {item.children && <Icon icon="heroicons:chevron-down" width={16} />}
                </a>
                {item.children && (
                  <div
                    className={`absolute left-0 top-full flex flex-col bg-secondary text-background shadow-lg mt-2 w-60 rounded-lg transition-transform transition-opacity duration-300 ${
                      openDesktopMenu === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child, childIndex) => (
                      <a key={childIndex} href={child.link} className="px-4 py-2 hover:bg-accent hover:text-primary">
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:flex items-center md:space-x-6">
            {!isMobileMenuOpen && (
              <a
                href="https://app.zipphy.com/login"
                className="bg-accent text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-background transition-colors"
              >
                Login
              </a>
            )}
            <a
              href="https://app.zipphy.com/signup"
              className="hidden md:block bg-accent text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-background transition-colors"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden">
            {!isMobileMenuOpen && (
              <button
                className="text-background focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon icon="heroicons:bars-3" width={24} className="border border-gray-100 rounded p-2 h-12 w-12" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="max-w-80 bg-white text-primary px-4 space-y-4">
          <div className="flex justify-between items-center">
            <img src={logoDark} alt="Zipphy Logo" className="w-60" />
            <button className="text-background focus:outline-none" onClick={closeMobileMenu}>
              <Icon icon="heroicons:x" width={24} className="border rounded p-2 h-12 w-12" />
            </button>
          </div>
          {navMenu.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <a href={item.link || "#"} className="block hover:text-accent transition-colors">
                  {item.title}
                </a>
                {item.children && (
                  <button
                    onClick={() => setOpenMobileMenu(openMobileMenu === index ? null : index)}
                    className="focus:outline-none"
                  >
                    <Icon
                      icon={openMobileMenu === index ? "heroicons:chevron-down" : "heroicons:chevron-right"}
                      className="bg-accent rounded text-background p-2 h-8 w-8"
                    />
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className={`transition-[max-height] duration-300 overflow-hidden ${
                    openMobileMenu === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="ml-6 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.link}
                        className="block px-2 py-1 hover:bg-accent hover:text-primary"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 bg-black opacity-50 relative" onClick={closeMobileMenu}>
          <Icon icon="heroicons:x-mark" width={24} className="text-white font-bold absolute right-4 top-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
