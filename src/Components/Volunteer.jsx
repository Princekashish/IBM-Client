import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import ScrollTop from "./Scrolltop/Scrolltop";
import { handleSucess } from "../utils/tost";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Volunteer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setAvailability(today);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSucess("Volunteer details submitted!");
    setTimeout(() => {
      navigate('/');
    }, 1000); 

  };
  return (
    <div className="min-h-screen bg-gray-100">
    <ScrollTop/>
      <div className="relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Join as a Volunteer
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Date Available</label>
                <input
                  type="date"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>

              <button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="Submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}