import { useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token")); // Retrieve token from localStorage or set it in your login/signup logic

  return (
    <>
      <div className="bg-[#EEF7F8] dark:bg-zinc-900">
        <Navbar />
        <main>
          <Outlet context={{ token }} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
