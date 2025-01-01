import React from "react";
import logo from "@/assets/zipphy.png";
import Icon from "@/components/ui/Icon";

const Footer = () => {
  return (
    <footer className="bg-primary text-background pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-secondary">
        <div className="flex flex-col items-start">
          <img src={logo} alt="Zipphy Logo" className="w-32 mb-4" />
          <div className="flex space-x-4">
            <Icon icon="mdi:facebook" width={36} className="text-accent hover:scale-110 transition-transform" />
            <Icon icon="mdi:instagram" width={36} className="text-accent hover:scale-110 transition-transform" />
            <Icon icon="mdi:linkedin" width={36} className="text-accent hover:scale-110 transition-transform" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: contact@zipphy.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Zipphy Lane, Green City</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-accent">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        <p>&copy; {new Date().getFullYear()} Zipphy.com. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-accent">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-accent">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
