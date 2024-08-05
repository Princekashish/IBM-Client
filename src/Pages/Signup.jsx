import React, { useState } from "react";
import { signup } from "../assets";
import { handlError, handleSucess } from "../utils/tost";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ScrollTop from "../Components/Scrolltop/Scrolltop";
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
      console.log("Signup successful", response.data);
      const result = response.data;

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
      // Handle network
      console.error("Error during signup:", error);
      handlError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] lg:h-[70vh] bg-zinc-900 relative overflow-hidden">
    <ScrollTop />
      <img
        src="https://images.pexels.com/photos/7351644/pexels-photo-7351644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Background"
        className="absolute inset-0  lg:h-[70vh] h-[80vh]  object-cover blur-sm pointer-events-none"
      />
      <div className="flex flex-row items-center justify-around w-full ">
        <div className="xl:p-8 bg-white backdrop-blur-lg inset-1 shadow-lg rounded-2xl w-[320px] p-5 ">
          <h2 className="mb-6 text-2xl font-bold text-center text-black">
            SIGN UP
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="username" // Add the name attribute
              onChange={handleChange}
              value={signup.username}
              type="text"
              placeholder="Username"
              className="py-3  border-b-2  px-6 outline-none"
            />
            <input
              name="email" // Add the name attribute
              type="email"
              onChange={handleChange}
              value={signup.email}
              placeholder="Email ID"
              className="py-3  border-b-2  px-6 outline-none"
            />
            <input
              name="password" // Add the name attribute
              type="password"
              onChange={handleChange}
              value={signup.password}
              placeholder="Password"
              className="py-3  border-b-2  px-6 outline-none"
            />
            <button
              type="Submit"
              className="p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
            >
              SIGN UP
            </button>
          </form>
          <div className="flex justify-start items-start text-white pt-5 text-xs gap-2">
            <h1 className="text-black">Do you have account?</h1>
            <Link to={"/login"} className="text-blue-600 cursor-pointer">
              {" "}
              Log In
            </Link>
          </div>
        </div>
        <div className=" text-white relative hidden lg:block">
          <img
            src="/E_Elyx_02.png"
            alt=""
            className="w-[630px] rounded-xl pointer-events-none"
          />
          {/* <h1 className="text-lg font-medium">
            <i>
              Sustainable development means recognizing that we are stewards of
              this planet and must work together to provide for future
              generations. Ending hunger is a cornerstone of achieving true
              sustainability.
            </i>
          </h1>
          <p className="text-end text-xs text-blue-600 ">
            Howard G. Buffett
          </p> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
