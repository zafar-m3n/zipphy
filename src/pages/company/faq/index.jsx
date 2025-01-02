import React from "react";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/ui/Accordion";

const FAQs = () => {
  const faqItems = [
    {
      title: "How do I sign up?",
      content:
        "To sign up, navigate to the registration page, complete the form, and click 'Open Account.' Check your inbox for a confirmation email titled 'Confirm Your Email Address.' Click the link, and you'll be redirected to our site. Provide the required information and continue. Finally, set up your trading account, and you're ready to begin trading!",
    },
    {
      title: "What are the trading hours?",
      content:
        "Trading is available 24 hours a day, starting from 00:00 on Monday and closing at 23:59 on Friday. The markets remain active throughout this period.",
    },
    {
      title: "What type of account should I choose?",
      content:
        "The ideal account type depends on your chosen trading platform and preferred instruments. Explore our account comparison chart to make an informed decision. You can always open another account if your needs change.",
    },
    {
      title: "How do I deposit funds into my trading account?",
      content:
        "You can deposit funds through the client portal. Simply click on the 'Deposit Funds' tab and choose your preferred funding method. Processing times vary: standard methods may take up to 24 hours, while bank wire transfers may take up to 3 business days, depending on the bank.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <Accordion items={faqItems} />
          </div>
          <div className="flex-1">
            <div className="w-full h-64 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                <img src="/images/faq.png" alt="Contact Us" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default FAQs;
