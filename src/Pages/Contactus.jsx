import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { location, mail, phone } from "../assets";
import { Link } from "react-router-dom";
import ScrollTop from "../Components/Scrolltop/Scrolltop";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleChange) {
      // Simulate form submission
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const cardItem = [
    {
      content: "Elliott Ave, Parkville VIC 3052, Melbourne Canada",
      icon: location,
      alt: "Location icon",
    },
    {
      content: "+1 800 123 4567",
      icon: phone,
      alt: "Phone icon",
    },
    {
      content: "info@gmail.com",
      icon: mail,
      alt: "Mail icon",
    },
  ];

  return (
    <div className="p-10 font-poppins">
      <ScrollTop />
      <div>
        <Link to="/">
          <h1 className="lg:text-xl text-sm font-semibold flex gap-2 items-center">
            <FaArrowLeft />
            Back
          </h1>
        </Link>
      </div>
      <div className="text-center space-y-3 mt-10">
        <h1 className="xl:text-3xl text-xl font-medium text-orange-600">
          Contact Us
        </h1>
        <h2 className="lg:text-3xl text-xl font-sans font-semibold mt-2">
          We’d love to hear from you
        </h2>
      </div>

      <div className="flex flex-col justify-start p-4 gap-5 mt-7 xl:flex-row xl:justify-center xl:items-center">
        {cardItem.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={item.icon} alt={item.alt} className="xl:w-5 sm:w-5 w-3" />
            <div>
              <h1 className="text-sm ">{item.content}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h1 className="text-lg xl:text-center xl:text-2xl xl:font-semibold">
          Drop us a message
        </h1>
        <div className="flex justify-center pt-5 xl:items-start xl:gap-10 ">
          <div>
            <form onSubmit={handleSubmit} className="w-full lg:w-auto">
              <div className="lg:flex lg:flex-row flex-col xl:flex-col lg:justify-between justify-center lg:gap-3 gap-0">
                <label htmlFor="name" className="sr-only">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-12 p-2 bg-[#E8E8E8]  border-2 border-[#838383] rounded-[6px] lg:w-[450px] sm:w-[400px] w-full `}
                />

                <label htmlFor="email" className="sr-only">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 p-2 lg:mt-0 mt-2 bg-[#E8E8E8] border-2 border-[#838383] rounded-[6px] lg:w-[450px] sm:w-[400px] w-full `}
                />
              </div>
              <div className="lg:flex lg:flex-row flex-col justify-between lg:gap-3 gap-0 lg:mt-7 mt-2">
                <label htmlFor="phone" className="sr-only">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-12 p-2 lg:mt-0 mt-2 bg-[#E8E8E8] border-2 border-[#838383] rounded-[6px] lg:w-[450px] sm:w-[400px] w-full`}
                />
              </div>
              <label htmlFor="message" className="sr-only">
                Enter your message...
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={handleChange}
                className={`lg:mt-7 mt-2 p-2 bg-[#E8E8E8] border-2 border-[#838383] rounded-[6px] xl:w-[454px] sm:w-[400px] w-full lg:h-[291px] h-[150px] `}
              ></textarea>

              <button
                type="Submit"
                className="p-2 m-2 rounded-[6px] px-5 text-white bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="hidden xl:block xl:b">
            <img
              src="./E_PRINT_02.jpg"
              alt=""
              className="rounded-2xl h-[420px] pointer-events-none"
            />
          </div>
        </div>
        {formSubmitted && (
          <p className="text-green-500 mt-3">Thank you for your message!</p>
        )}
      </div>
    </div>
  );
}

export default Contactus;
