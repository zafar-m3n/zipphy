import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerTape from "@/components/TickerTape";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TickerTape />

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
