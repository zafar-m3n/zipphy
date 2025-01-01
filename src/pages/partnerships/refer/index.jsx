import React from "react";
import ContactForm from "@/components/ContactForm";

const ReferFriend = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Section 1: Refer a Friend */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Refer a Friend and Earn Rewards</h2>
            <p className="text-gray-600 md:text-lg">
              Our referral program is designed to reward both you and your friends. Share your unique referral link, and
              the more your friends trade, the more you both benefit. Start earning today by inviting your friends to
              join the platform!
            </p>
            <button className="mt-4 bg-accent text-white py-2 px-6 rounded shadow hover:bg-secondary transition duration-300">
              Register Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Refer a Friend"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2: How It Works */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Invite Your Friends in 3 Easy Steps</h2>
          <p className="text-gray-600 md:text-lg">
            Help your friends get started while earning rewards for yourself. It's a win-win!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="absolute inset-0 text-9xl font-bold text-gray-200 -z-10 flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold text-secondary mt-4 relative">Share Your Unique Link</h3>
              <p className="text-gray-600 mt-2 relative">
                Copy and share your referral link with friends. You can find your unique link in your account dashboard.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="absolute inset-0 text-9xl font-bold text-gray-200 -z-10 flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold text-secondary mt-4 relative">Friend Signs Up</h3>
              <p className="text-gray-600 mt-2 relative">
                Once your friend clicks on the link, they’ll be guided through the sign-up process and can start trading
                right away.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="absolute inset-0 text-9xl font-bold text-gray-200 -z-10 flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold text-secondary mt-4 relative">Earn Exclusive Rewards</h3>
              <p className="text-gray-600 mt-2 relative">
                When your friend starts trading, both of you will earn rewards. Enjoy perks such as bonuses, discounts,
                or other exclusive benefits.
              </p>
            </div>
          </div>
          <button className="mt-8 bg-accent text-white py-2 px-6 rounded shadow hover:bg-secondary transition duration-300">
            Register Now
          </button>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ReferFriend;
