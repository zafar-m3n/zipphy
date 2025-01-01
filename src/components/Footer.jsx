import React from "react";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-background pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-secondary">
        <div className="flex flex-col items-start">
          <img src={logo} alt="Zipphy Logo" className="w-full" />
          <div className="flex space-x-4 ms-12">
            <Icon icon="mdi:facebook" width={36} className="text-accent hover:scale-110 transition-transform" />
            <Icon icon="mdi:instagram" width={36} className="text-accent hover:scale-110 transition-transform" />
            <Icon icon="mdi:linkedin" width={36} className="text-accent hover:scale-110 transition-transform" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-accent mb-6 underline underline-offset-8">Contact Us</h3>
          <div className="flex items-center mb-6">
            <Icon icon="heroicons:envelope" className="bg-accent w-11 h-11 p-2 rounded-full" />
            <span className="ml-4 text-background">support@zipphy.com</span>
          </div>
          <div className="mb-6">
            <h4 className="text-base font-semibold text-background mb-2">Australia</h4>
            <div className="flex items-start mb-2">
              <Icon icon="heroicons:map-pin" className="bg-accent w-12 h-11 p-2 rounded-full" />
              <p className="ml-4 text-background">57 Carters Road, Dural NSW 2158, Sydney, Australia.</p>
            </div>
            <div className="flex items-center">
              <Icon icon="heroicons:phone" className="bg-accent w-11 h-11 p-2 rounded-full" />
              <span className="ml-4 text-background">+61 483 956 413</span>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-base font-semibold text-background mb-2">United Kingdom</h4>
            <div className="flex items-start mb-2">
              <Icon icon="heroicons:map-pin" className="bg-accent w-11 h-11 p-2 rounded-full" />
              <p className="ml-4 text-background">22 Broomfield Place, Stoven, United Kingdom.</p>
            </div>
            <div className="flex items-center">
              <Icon icon="heroicons:phone" className="bg-accent w-11 h-11 p-2 rounded-full" />
              <span className="ml-4 text-background">+44 7360 545857</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-accent mb-6 underline underline-offset-8">Useful Links</h3>
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
