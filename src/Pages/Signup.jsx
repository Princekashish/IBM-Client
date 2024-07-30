import React, { useState } from "react";
import { signup } from "../assets";
import { handlError, handleSucess } from "../utils/tost";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //onchange handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = signup;
    if (!username || !email || !password) {
      return handlError("All field are required");
    }
    try {
      const url = `https://ibm-server.onrender.com/auth/v1/user/signup`;
      const response = await axios.post(url, signup, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Signup successful ppr", response.data);
      const result = response.data;

      console.log("Signup response:", result);

      if (result.user && result.token) {
        handleSucess("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (result.message) {
        handlError(result.message);
      } else {
        handlError("Signup failed. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during signup:", error);
      handlError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-[#EEF7F8]">
      <div className="flex flex-row items-center justify-center w-full">
        <div className="w-1/2 p-8 hidden xl:block">
          <div className="flex items-center justify-center h-full">
            <img src={signup} alt="Sign Up" className="w-full h-auto" />
          </div>
        </div>
        <div className="xl:p-8 bg-zinc-900 shadow-lg rounded-2xl w-[320px] p-5">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            SIGN UP
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="username" // Add the name attribute
              onChange={handleChange}
              value={signup.username}
              type="text"
              placeholder="Username"
              className="py-3 rounded-full px-12 outline-none"
            />
            <input
              name="email" // Add the name attribute
              type="email"
              onChange={handleChange}
              value={signup.email}
              placeholder="Email ID"
              className="py-3 rounded-full px-12 outline-none"
            />
            <input
              name="password" // Add the name attribute
              type="password"
              onChange={handleChange}
              value={signup.password}
              placeholder="Password"
              className="py-3 rounded-full px-12 outline-none"
            />
            <button
              type="Submit"
              className="p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
            >
              SIGN UP
            </button>
          </form>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-google"></i>
            </button>
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
