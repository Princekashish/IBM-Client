import { useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./Components";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="bg-[#EEF7F8]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
