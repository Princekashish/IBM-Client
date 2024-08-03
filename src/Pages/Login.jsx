import React, { useState } from "react";
import { handlError, handleSucess } from "../utils/tost";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ScrollTop from "../Components/Scrolltop/Scrolltop";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    // Validate input
    if (!email || !password) {
      return handlError("Email and password are required");
    }

    try {
      const url = `https://ibm-server.onrender.com/auth/v1/user/login`;
      const response = await axios.post(url, loginInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;
      console.log("Response from server:", result);

      if (
        (response.status === 200 || response.status === 201) &&
        result.token
      ) {
        handleSucess("Login successful");
        localStorage.setItem("token", result.token);
        localStorage.setItem("loggedInUser", result.user.username);
        setTimeout(() => {
          navigate("/");
        }, 1000); // Redirect after 1 second
      } else {
        handlError(result.message || "An error occurred");
      }
    } catch (err) {
      console.error("Error during login:", err);
      handlError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:h-[70vh] h-[80vh] bg-zinc-900 relative overflow-hidden">
    <ScrollTop />
      <img
        src="https://images.pexels.com/photos/7351644/pexels-photo-7351644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Background"
        className="absolute inset-0 w-full lg:h-[70vh] h-[80vh] object-cover blur-sm pointer-events-none"
      />
      <div className="flex flex-col-reverse xl:flex-row items-center justify-around w-full ">
        <div className="xl:p-8 bg-white backdrop-blur-lg inset-1 shadow-lg rounded-2xl w-[320px] p-5">
          <h2 className="mb-6 text-2xl font-bold text-center ">LOG IN</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={loginInfo.email}
              placeholder="Email ID"
              className="py-3  border-b-2  px-6 outline-none"
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={loginInfo.password}
              placeholder="Password"
              className="py-3  border-b-2  px-6 outline-none"
            />
            <button
              type="submit"
              className="p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
            >
              LOGIN
            </button>
          </form>
          <div className="flex justify-start items-start text-white pt-5 text-xs gap-2">
            <h1 className="text-black">Don’t have account? </h1>
            <Link to={"/signup"} className="text-blue-600 cursor-pointer">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
        <div className=" text-white relative w-[420px] hidden lg:block">
          <h1 className="text-lg font-medium">
            <i>
              Sustainable development means recognizing that we are stewards of
              this planet and must work together to provide for future
              generations. Ending hunger is a cornerstone of achieving true
              sustainability.
            </i>
          </h1>
          <p className="text-end text-sm font-medium text-blue-600 ">Howard G. Buffett</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
