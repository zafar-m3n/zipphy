import React from "react";
import Icon from "@/components/ui/Icon";

const awards = [
  {
    year: 2022,
    title: "Best multi-asset platform",
    event: "Forex Expo Dubai",
  },
  {
    year: 2022,
    title: "Best affiliate program",
    event: "Fazzaco Business Awards",
  },
  {
    year: 2022,
    title: "Best fintech broker",
    event: "Wiki Finance Expo",
  },
  {
    year: 2022,
    title: "Most Innovative broker",
    event: "Forex Traders Summit",
  },
  {
    year: 2021,
    title: "Best FX trading platform",
    event: "Forex Expo Dubai",
  },
];

const AwardsSection = () => {
  return (
    <section className="mx-auto container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Awards</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto max-w-[90rem]">
        {awards.map((award, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex items-center justify-center">
              <Icon icon="hugeicons:laurel-wreath-left-01" width={96} className="text-secondary" />
              <div className="flex flex-col items-center text-center space-y-2">
                <h3 className="text-3xl font-bold text-accent">{award.year}</h3>
                <p className="text-gray-700 text-sm">{award.title}</p>
              </div>
              <Icon icon="hugeicons:laurel-wreath-right-01" width={96} className="text-secondary" />
            </div>
            <p className="text-primary italic">{award.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
