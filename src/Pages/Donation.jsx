import React, { useState } from "react";
import { motion } from "framer-motion";

function Donation() {
  const [donorType, setDonorType] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [nearestNGO, setNearestNGO] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Food donation details submitted!");
  };

  return (
   <div className=" h-screen bg-gray-100">
      <div className="relative overflow-hidden ">
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
              Food Donation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Donor Type</label>
                <select
                  value={donorType}
                  onChange={(e) => setDonorType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                >
                  <option value="">Select type</option>
                  <option value="individual">Individual Donor</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="grocery">Grocery Store</option>
                  <option value="food_bank">Food Bank</option>
                  <option value="community_garden">Community Garden</option>
                  <option value="corporate">Corporate Donor</option>
                  <option value="event_venue">Event Venue</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Contact Information</label>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Type of Food</label>
                <input
                  type="text"
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Nearest NGO</label>
                <input
                  type="text"
                  value={nearestNGO}
                  onChange={(e) => setNearestNGO(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-4"
              >
                Submit Donation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      </div>
  );
}

export default Donation;