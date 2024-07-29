import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function Testimonials() {
  const service = [
    {
      img: "https://omnifood.dev/img/customers/customer-2.jpg",
      name: "John Doe",
      place: "Noida",
      feedback:
        "“Thanks to this amazing charity, I was able to provide my family with nutritious meals during a very difficult time. Their support has been life-changing, giving us hope and strength to move forward. We are forever grateful for their kindness and generosity.”",
    },
    {
      img: "https://omnifood.dev/img/customers/customer-4.jpg",
      name: "Jane Smith",
      place: "Noida",
      feedback:
        "“The food packs we received were not only plentiful but also full of healthy options. This charity is truly making a difference in our community. Their dedication to helping those in need is inspiring, and their efforts have brought smiles and relief to many families.”",
    },
    {
      img: "https://omnifood.dev/img/customers/customer-5.jpg",
      name: "Carlos Martinez",
      place: "Noida",
      feedback:
        "“I am so grateful for the support from this charity. The meals provided have helped me focus on finding a job and getting back on my feet. Knowing that there are people who care and are willing to help has been incredibly motivating. Thank you for making a real difference in my life.”",
    },
  ];
  
  return (
    <div className="font-poppins p-5 lg:p-10">
      <div className="rounded-2xl h-[486px]">
        <div className="bg-feedback bg-cover bg-center bg-no-repeat h-[586px] rounded-2xl text-center">
          <h1 className="text-black font-semibold uppercase leading-[60px] tracking-[3.78px] lg:text-[35px] lg:uppercase lg:text-black">
            Testimonials
          </h1>
          <div className="bg-black w-[77px] h-[76px] rounded-full flex justify-center items-center absolute z-10 left-[40%] lg:hidden">
            <img src="./feedback.png" alt="" />
          </div>

          {/* slider */}
          <div className="max-w-4xl mx-auto mt-10 lg:hidden">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
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
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="w-full"
            >
              <div className="object-cover">
                {service.map((items, i) => (
                  <SwiperSlide
                    key={i}
                    className="h-[350px] md:text-xl md:p-10 rounded-2xl flex flex-col justify-start items-center bg-[#ECEBEB] pt-5"
                  >
                    <p className="p-2 text-base tracking-tight font-light mt-5 text-center">
                      {items.feedback}
                    </p>
                    <div className="flex justify-start items-center mt-10 gap-5">
                      <img
                        src={items.img}
                        alt=""
                        className="rounded-full h-[46px] w-[47px]"
                      />
                      <div className="flex flex-col justify-start items-start">
                        <h1>{items.name}</h1>
                        <p className="text-xs">{items.place}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          {/* card */}
          <div>
            <div className="hidden lg:block">
              <div className="flex gap-10 p-10">
                {service.map((items, i) => (
                  <div
                    key={i}
                    className="h-[350px] rounded-2xl flex flex-col justify-start items-center bg-[#ECEBEB] pt-5"
                  >
                    <p className="p-2 text-base tracking-tight font-light mt-5 text-center">
                      {items.feedback}
                    </p>
                    <div className="flex justify-start items-center mt-10 gap-5">
                      <img
                        src={items.img}
                        alt=""
                        className="rounded-full h-[76px] w-[77px] lg:h-[40px] lg:w-[40px]"
                      />
                      <div className="flex flex-col justify-start items-start">
                        <h1>{items.name}</h1>
                        <p className="text-xs">{items.place}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}