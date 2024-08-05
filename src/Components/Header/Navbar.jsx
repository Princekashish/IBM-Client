import React, { useState, useEffect } from "react";
import { logo } from "../../assets";
import { Button } from "../index";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { handleSucess } from "../../utils/tost";
import { motion } from "framer-motion";
import { CiDark , CiLight} from "react-icons/ci";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  

  // Effect to update loggedInUser from localStorage
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, [loggedInUser]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSucess("User logged out successfully");
    setLoggedInUser(null);
    setTimeout(() => {
      navigate("/");
      setToggle(false);
    }, 1000);
  };

  // Navigation items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Fundraisers", link: "/fundraisers" },
    { name: "Contact", link: "/contact" },
    { name: "Education", link: "/education" },
  ];
  //animation

  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div  className={"dark:bg-zinc-900 sticky top-0 font-poppins  shadow-sm bg-[#EEF7F8] xl:p-5 pl-5 pr-5 p-2 flex justify-between items-center w-full z-20"}>
      {darkMode? <div>
        <Link to="/">
          <img
            src='/image-removebg-preview (1).png'
            alt="logo"
            className="xl:w-[167px] xl:h-[56px] w-[127px] h-[46px] "
          />
        </Link>
      </div> : <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="xl:w-[167px] xl:h-[56px] w-[127px] h-[46px] "
          />
        </Link>
      </div>}

      <div className="lg:flex hidden xl:gap-14 xl:items-center ">
        <div className="lg:flex w-full xl:gap-7">
          {navItems.map((item, index) => (
            <div key={index} className="cursor-pointer text-[#484848] dark:text-[#DFDFD6]">
              {item.link.startsWith("#") ? (
                <a href={item.link} onClick={() => setToggle(false)}>
                  {item.name}
                </a>
              ) : (
                <Link to={item.link} onClick={() => setToggle(false)}>
                  {item.name}
                </Link>
              )}

            </div>
          ))}
        </div>
        <div>
          {loggedInUser ? (
            <div className="flex items-center">
              <span className="text-[#484848] mr-4">{loggedInUser}</span>
              <button onClick={handleLogout} className="text-red-600 text-sm">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signup">
              <Button
                msg="Signup"
                className="xl:py-2 px-7 text-white rounded-full"
              />
            </Link>
          )}
        </div>
        <div onClick={toggleDarkMode} className="relative right-6 dark:text-[#DFDFD6]">
        {darkMode ? <CiLight size={30}/> : <CiDark size={30}/>}
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex items-center justify-between">
        <div>
          <button onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <IoCloseSharp size={30} className="absolute z-10 right-5 top-4 dark:text-white" />
            ) : (
              <GiHamburgerMenu size={30} className="dark:text-white" />
            )}
          </button>
        </div>
        

        <motion.div
          animate={toggle ? "open" : "closed"}
          initial={{x:0,opacity:0}}
          variants={variants}
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-0 right-0 left-0 p-5 dark:bg-zinc-900 bg-[#EEF7F8] h-screen flex  flex-col transition-opacity duration-500 ease-in-out`}
        >
          <div onClick={() => setToggle(false)}>
          {darkMode? <div>
        <Link to="/">
          <img
            src='/image-removebg-preview (1).png'
            alt="logo"
            className="xl:w-[167px] xl:h-[56px] w-[127px] h-[46px] "
          />
        </Link>
      </div> : <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="xl:w-[167px] xl:h-[56px] w-[127px] h-[46px] "
          />
        </Link>
      </div>}
          </div>

          <div className="w-full mt-10 flex  flex-col gap-3 h-full  ">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="text-xl cursor-pointer text-[#484848]  dark:text-[#DFDFD6]"
              >
                {item.link.startsWith("#") ? (
                  <a href={item.link} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.link} onClick={() => setToggle(false)}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {loggedInUser ? (
              <div className="mt-2 text-xl cursor-pointer text-[#484848] space-x-9 ">
                <span>{loggedInUser}</span>
                <button onClick={handleLogout} className="text-red-600 text-sm ">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={"/signup"}
                onClick={() => setToggle(false)}
                className="mt-2 text-xl cursor-pointer text-[#484848] dark:text-[#DFDFD6]"
              >
                Signup
              </Link>
            )}
            <div onClick={toggleDarkMode} className="absolute right-5 dark:text-[#DFDFD6]">
        {darkMode ? <CiLight size={30}/> : <CiDark size={30}/>}
        </div>
            <Link to={"/donation"} onClick={() => setToggle(false)}>
              <div className="mt-10 flex justify-center items-center">
                <Button
                  msg="Donate"
                  className="px-28 py-3 text-white dark:text-black dark:bg-[#DFDFD6] bg-black rounded-full"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
