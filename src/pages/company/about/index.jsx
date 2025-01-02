import React from "react";
import ContactForm from "@/components/ContactForm";
import HowToGetStarted from "@/components/HowToGetStarted";

const AboutUsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary">ABOUT US</h2>
            <p className="text-sm md:text-lg text-justify mt-4">
              Select a trusted broker—one that stands by you. At Zipphy, we are committed to putting our clients first,
              providing reliable services, and offering exceptional support. Whether you’re a seasoned trader or new to
              trading, we prioritize your success and aim to provide the resources and tools you need to thrive.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/about.png" alt="About Us" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <img src="/images/mission.jpg" alt="Our Mission" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Mission</h2>
            <p className="text-sm md:text-lg text-justify mt-4">
              At Zipphy, we aim to empower traders by delivering cutting-edge trading technology, innovative tools, and
              exceptional support. Our mission is to provide a robust platform where traders can thrive with confidence
              and achieve their financial aspirations.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Vision</h2>
            <p className="text-sm md:text-lg text-justify mt-4">
              Our vision is to lead the industry with innovation and reliability, offering a platform that empowers
              traders to excel in their financial journeys. We strive to create a seamless trading experience, helping
              our clients achieve their goals and shape a prosperous future.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/vision.jpg" alt="Our Vision" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
          </div>
        </div>

        {/* Empowerment Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="/images/empowerment.jpg"
              alt="Empowerment"
              className="w-full rounded-lg shadow-lg animate-fadeInUp"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary">Empowerment</h2>
            <p className="text-sm md:text-lg text-justify mt-4">
              At Zipphy, every trade counts! We’re dedicated to empowering our clients with tailored solutions and
              personalized support to help them unlock their trading potential. Discover trading as it’s meant to be:
              dependable, transparent, and accessible.
            </p>
          </div>
        </div>

        {/* How To Get Started Component */}
        <HowToGetStarted />
      </div>
      <ContactForm />
    </>
  );
};

export default AboutUsPage;
