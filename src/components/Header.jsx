import React, { useState } from "react";
import { navMenu } from "@/data/data";
import logo from "@/assets/logo-white.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-background shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Zipphy Logo" className="h-24" />
        </a>
        <div className="md:hidden">
          <button className="text-background focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navMenu.map((item, index) => (
            <div key={index} className="relative group">
              <a href={item.link || "#"} className="hover:text-accent transition-colors">
                {item.title}
              </a>
              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-secondary text-background shadow-lg mt-2">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary text-background p-4 space-y-4">
          {navMenu.map((item, index) => (
            <div key={index}>
              <a href={item.link || "#"} className="block hover:text-accent transition-colors">
                {item.title}
              </a>
              {/* Dropdown Menu for Mobile */}
              {item.children && (
                <div className="pl-4 space-y-2">
                  {item.children.map((child, childIndex) => (
                    <a key={childIndex} href={child.link} className="block hover:text-accent">
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
