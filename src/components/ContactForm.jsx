import React from "react";

const ContactForm = () => {
  return (
    <div
      className="relative py-16 bg-gradient-to-b from-secondary to-primary"
    >
      {/* Contact Form */}
      <div className="relative z-10">
        <div
          className="max-w-lg mx-auto bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-8"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-6">Get In Touch With Us</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-accent focus:ring-accent focus:ring-1"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-accent focus:ring-accent focus:ring-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-accent focus:ring-accent focus:ring-1"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone No.
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone No."
                  className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-accent focus:ring-accent focus:ring-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message..."
                className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-accent focus:ring-accent focus:ring-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-2 px-4 rounded shadow hover:bg-secondary transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
