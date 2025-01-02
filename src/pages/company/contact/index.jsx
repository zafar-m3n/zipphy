import React from "react";
import Icon from "@/components/ui/Icon";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2">
          <img src="/images/contact.png" alt="Contact Us" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <form className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message..."
                className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white font-bold py-2 px-4 rounded shadow hover:bg-accent transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <Icon icon="heroicons:map-pin" className="text-4xl text-secondary" />
          <h3 className="text-xl font-bold text-secondary">Australia</h3>
          <p className="text-gray-600">57 Carters Road, Dural NSW 2158, Sydney, Australia</p>
          <p className="text-gray-600">+61 483 395 413</p>
        </div>
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <Icon icon="heroicons:map-pin" className="text-4xl text-secondary" />
          <h3 className="text-xl font-bold text-secondary">United Kingdom</h3>
          <p className="text-gray-600">22 Broomfield Place, Steven, United Kingdom</p>
          <p className="text-gray-600">+44 7360 946587</p>
        </div>
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <Icon icon="heroicons:envelope" className="text-4xl text-secondary" />
          <h3 className="text-xl font-bold text-secondary">Email Now</h3>
          <p className="text-gray-600">support@zipphy.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
