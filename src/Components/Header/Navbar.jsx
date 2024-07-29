import React, { useState } from "react";
import { logo } from "../../assets";
import { Button } from "../index";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Fundraisers",
      link: "/fundraisers",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Education",
      link: "/education",
    },
  ];

  return (
    <div className="sticky top-0 font-poppins shadow-sm bg-[#EEF7F8] xl:p-5  pl-5 pr-5 p-2 flex justify-between items-center w-full z-20">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="xl:w-[167px] xl:h-[56px] w-[127px] h-[46px]   "
          />
        </Link>
      </div>

      <div className="lg:flex hidden xl:gap-14 xl:items-center">
        <div className=" lg:flex   w-full xl:gap-7 ">
          {navItems.map((item, index) => {
            return (
              <div key={index} className=" ]cursor-pointer text-[#484848]  ">
                <Link
                  to={item.link}
                  className="hover:border-b-2 hover:border-black "
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Link to="/signup">
            {" "}
            <Button
              msg="Signup"
              className="xl:py-2 px-7 text-white rounded-full "
            />
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex-col felx-1 justify-end ">
        <div>
          <button onClick={() => setToggle((prev) => !prev)}>
            {!toggle ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <IoCloseSharp size={30} className="absolute z-10 right-5 top-4" />
            )}
          </button>
        </div>

        <div
          className={` ${
            toggle ? "flex" : "hidden"
          }   absolute top-0 right-0 left-0 p-5   bg-[#EEF7F8] h-screen flex flex-col   transition-opacity duration-500 ease-in-out`}
        >
          <div onClick={() => setToggle(false)}>
            <Link to="/">
              <img src={logo} alt="logo" className=" w-[127px] h-[46px]   " />
            </Link>
          </div>

          <div className="   w-full mt-10 flex flex-col gap-3  h-full">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-xl cursor-pointer text-[#484848]"
                >
                  {item.link.startsWith("#") ? (
                    <a href={item.link} onClick={() => setToggle(false)}>
                      {item.name}{" "}
                    </a>
                  ) : (
                    <Link to={item.link} onClick={() => setToggle(false)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              to={"/signup"}
              onClick={() => setToggle(false)}
              className="mt-2  text-xl cursor-pointer text-[#484848]"
            >
              Signup
            </Link>

            <Link to={'/donation'} onClick={() => setToggle(false)}>
              <div className="mt-10  flex justify-center items-center ">
                <Button
                  msg="Donate"
                  className="px-28 py-3 text-white bg-black rounded-full"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;