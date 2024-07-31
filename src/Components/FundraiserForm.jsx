import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handlError, handleSucess } from "../utils/tost";
import { ToastContainer } from "react-toastify";
import ScrollTop from "./Scrolltop/Scrolltop";

function FundraiserForm() {
  const [formData, setFormData] = useState({
    purpose: "",
    category: "",
    story: "",
    location: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      details: e.target.details.value,
      location: e.target.location.value,
    };

    const token = localStorage.getItem("token");

    if (!token) {
      handlError("No token found, please log in first");
      return;
    }

    try {
      const response = await axios.post(
        "https://ibm-server.onrender.com//api/fundraisers/create",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      handleSucess("Fundraiser created successfully");
      setTimeout(() => {
        navigate("/fundraisers");
      }, 1000);
    } catch (error) {
      console.error(
        "Error creating fundraiser:",
        error.response?.data || error.message
      );
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        handlError(error.response.data.message);
      } else {
        handlError("Error creating fundraiser");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-black/45 h-screen flex justify-center items-center"
    >
      <ScrollTop/>

      <div className="rounded-xl bg-white m-10 ">
        <Link to={"/"} className="p-3 text-xs">
          &lt; Back
        </Link>

        <div className="">
          <h1 className="font-semibold text-center mt-2">
            Tell us more about your fundraiser
          </h1>
          <form onSubmit={handleSubmit} className="flex p-5 flex-col gap-5">
            <div className="flex justify-start gap-2 flex-col">
              <label className="text-xs text-[#A1A1A1]">Purpose:</label>
              <input
                type="text"
                name="name"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                placeholder="Raising funds purpose"
                required
              />
            </div>
            <div className="flex justify-start gap-1 flex-col">
              <label className="text-xs text-[#A1A1A1]">Category:</label>
              <select
                name="category"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                required
              >
                <option value="">Select</option>
                <option value="urgent">Urgent</option>
                <option value="student">Trending</option>
              </select>
            </div>
            <div className="flex justify-start gap-1 flex-col">
              <label className="text-xs text-[#A1A1A1]">Details:</label>
              <input
                type="text"
                name="details"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                placeholder="Tell the story about why you are running a Fundraiser"
                required
              />
            </div>
            <div className="flex justify-start gap-1 flex-col">
              <label className="text-xs text-[#A1A1A1]">Location:</label>
              <select
                name="location"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                required
              >
                <option value="">Select</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Patna">Patna</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-36 py-3 rounded-2xl"
            >
              Start
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
}

export default FundraiserForm;
