import { useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./Components";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div className="bg-[#EEF7F8]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <SpeedInsights/>
        <Analytics/>
      </div>
    </>
  );
}

export default App;
