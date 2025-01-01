import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import AboutUsPage from "@/pages/company/about";
import FAQs from "@/pages/company/faq";
import ContactPage from "@/pages/company/contact";
import AccountTypes from "@/pages/investing/account-types/index";
import Deposits from "@/pages/investing/deposits/index";
import Platforms from "@/pages/investing/platforms/index";
import Education from "@/pages/investing/education/index";
import Promotions from "@/pages/promotions/index";
import Stocks from "@/pages/markets/stocks/index";
import Forex from "@/pages/markets/forex/index";
import Commodities from "@/pages/markets/commodities/index";
import CryptoCurrencies from "@/pages/markets/cryptocurrencies/index";
import Indices from "@/pages/markets/indices/index";
import ReferFriend from "@/pages/partnerships/refer/index";
import Broker from "@/pages/partnerships/broker/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Investing pages */}
          <Route path="/investing/account-types" element={<AccountTypes />} />
          <Route path="/investing/deposits-withdrawals" element={<Deposits />} />
          <Route path="/investing/platforms" element={<Platforms />} />
          <Route path="/investing/education" element={<Education />} />

          {/* Promotions Page */}
          <Route path="/promotions" element={<Promotions />} />

          {/* Markets pages */}
          <Route path="/markets/stocks" element={<Stocks />} />
          <Route path="/markets/forex" element={<Forex />} />
          <Route path="/markets/commodities" element={<Commodities />} />
          <Route path="/markets/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="/markets/indices" element={<Indices />} />

          {/* Partnerships pages */}
          <Route path="/partnerships/refer-a-friend" element={<ReferFriend />} />
          <Route path="/partnerships/introducing-broker" element={<Broker />} />

          {/* Company Pages */}
          <Route path="/company/about-us" element={<AboutUsPage />} />
          <Route path="/company/faq" element={<FAQs />} />
          <Route path="/company/contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
