import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Service() {
  const service = [
    {
      img: "./donate (1) 1.png",
      text: "Donator",
      quots:
        "“It is a long establshed fact that a reader will be distracted bu the readable content of a page when looking at its layout”",
    },
    {
      img: "./help 1.png",
      text: "Funrising",
      quots:
        "“It is a long establshed fact that a reader will be distracted bu the readable content of a page when looking at its layout”",
    },
    {
      img: "./charity 1.png",
      text: "Volunteer",
      quots:
        "“It is a long establshed fact that a reader will be distracted bu the readable content of a page when looking at its layout”",
    },
  ];
  return (
    <div className="font-poppins  p-5  lg:p-10  ">
      <h1 className=" text-[#e6511a] md:text-xl md:text-center text-base font-semibold uppercase leading-[60px] tracking-[3.78px] lg:text-center">
        Our services
      </h1>
      <h1 className="dark:text-[#DFDFD6] md:text-2xl md:text-center  md:pt-5 text-black font-poppins text-2xl font-bold lg:text-center lg:text-4xl">
        We are in a mission to help
      </h1>
      {/* slider */}
      <div className=" max-w-4xl mx-auto  mt-10 lg:hidden">
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.5}
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 1.15 },
            400: { slidesPerView: 1.15 },
            639: { slidesPerView: 1.15 },
            865: { slidesPerView: 1.15 },
            1000: { slidesPerView: 1.15 },
            1500: { slidesPerView: 1.15 },
            1700: { slidesPerView: 1.15 },
          }}
          navigation
          //   pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 8000 }}
          className="w-full"
        >
          <div className="object-cover ">
            {service.map((items, i) => (
              <SwiperSlide
                key={i}
                className={`h-80  rounded-2xl flex flex-col justify-center items-center ${
                  i % 2 === 0 ? "bg-[#ECEBEB]" : "bg-[#E6501B]"
                }`}
              >
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div
                    className={`rounded-full w-[73px] h-[73px] flex flex-col  justify-center items-center border border-black ${
                      i % 2 === 0 ? "bg-[#E6501B]" : "bg-[#ECEBEB]"
                    }`}
                  >
                    <img src={items.img} alt="" />
                  </div>
                  <h1
                    className={` text-black text-[25px] font-bold ${
                      i % 2 === 0 ? "text-black" : "text-white"
                    }`}
                  >
                    {items.text}
                  </h1>
                </div>
                <p
                  className={`p-2 md:p-10 md:text-xl text-sm font-light mt-5 text-center ${
                    i % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {items.quots}
                </p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      {/* card */}
      <div className="hidden lg:block ">
      <div className=" flex justify-center items-center gap-10 lg:p-10">
            {service.map((items, i) => (
              <div
                key={i}
                className={`h-80 rounded-2xl flex flex-col justify-center items-center  ${
                  i % 2 === 0 ? "bg-[#ECEBEB] dark:bg-[#2C2C2B]" : "bg-[#E6501B]"
                }`}
              >
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div
                    className={`rounded-full w-[73px] h-[73px] flex flex-col  justify-center items-center border border-black ${
                      i % 2 === 0 ? "bg-[#E6501B] dark:bg-white" : "bg-[#ECEBEB]"
                    }`}
                  >
                    <img src={items.img} alt="" />
                  </div>
                  <h1
                    className={` text-black text-[25px] font-bold ${
                      i % 2 === 0 ? "text-black dark:text-[#DFDFD6]" : "text-white"
                    }`}
                  >
                    {items.text}
                  </h1>
                </div>
                <p
                  className={`p-2 text-sm font-light mt-5 text-center ${
                    i % 2 === 0 ? "text-black dark:text-[#DFDFD6]" : "text-white"
                  }`}
                >
                  {items.quots}
                </p>
              </div>
            ))}
          </div>
          </div>
      {/* banner */}
      <div className="h-[450px] lg:h-[340px]  bg-zinc-900 mt-10 rounded-3xl flex flex-col justify-center gap-5 items-start p-5">
        <h1 className="text-white dark:text-[#DFDFD6] font-poppins text-4xl font-bold tracking-tighter  leading-10 lg:tracking-wider">
          Why donation is important.....?
        </h1>
        <p className="text-white dark:text-[#DFDFD6] text-sm mt-2 font-light md:text-xl xl:text-sm">
          Food donations offer numerous benefits, both to the recipients and the
          broader community. They directly combat hunger and food insecurity,
          ensuring that individuals and families in need have access to
          nutritious meals. This support is crucial for vulnerable populations,
          such as children, the elderly, and low-income families, enhancing
          their overall health and well-being.
        </p>
        <div>
            <Link to={'/education'}  className="bg-[#e6511a] text-white px-7 py-2 rounded-full capitalize outline-none focus:scale-110 hover:scale-110 transition">Learn more</Link>
        </div>
      </div>
    </div>
  );
}