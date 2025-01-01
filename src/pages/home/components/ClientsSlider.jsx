import React from "react";

const ClientSlider = () => {
  const banks = [
    { name: "JPMorgan Chase", logo: "/images/bankLogos/jpms.jpg" },
    { name: "Bank of America", logo: "/images/bankLogos/boa.png" },
    { name: "HSBC", logo: "/images/bankLogos/hsbc.png" },
    { name: "Citibank", logo: "/images/bankLogos/citibank.jpg" },
    { name: "Wells Fargo", logo: "/images/bankLogos/wfargo.png" },
    { name: "Goldman Sachs", logo: "/images/bankLogos/gsachs.png" },
    { name: "Deutsche Bank", logo: "/images/bankLogos/dbank.png" },
    { name: "Barclays", logo: "/images/bankLogos/barclays.jpg" },
  ];

  return (
    <section className="py-8">
      <div className="overflow-hidden relative">
        <div className="flex animate-slider space-x-12">
          {[...banks, ...banks, ...banks].map((bank, index) => (
            <div key={index} className="flex-none">
              <img src={bank.logo} alt={bank.name} className="w-36 h-16 object-contain mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
