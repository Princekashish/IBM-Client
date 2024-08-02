import { useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./Components";
import { Outlet } from "react-router-dom";
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
        <Analytics/>
      </div>
    </>
  );
}

export default App;
