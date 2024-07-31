import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { blogbg, Educationbanner, gallery, image1 } from "../assets";
import { Button } from "../Components";
import { Link } from "react-router-dom";
import Sponser from "../Components/Sponser/Sponserss";
import ScrollTop from "../Components/Scrolltop/Scrolltop";

function Education() {
  const Blog = [
    {
      img:'./pic4.png',
      title: "Innovative Food Waste Solutions: Community Fridges",
      date: "July 15, 2024",
      author: "Zero Waste Food Initiative",
      content:
        "Community fridges have emerged as a creative solution to tackle food waste and hunger. These publicly accessible refrigerators allow individuals and businesses to donate surplus food, ensuring it reaches those in need. The concept promotes a culture of sharing and reduces the environmental impact of food waste. Cities worldwide are adopting community fridges, fostering local networks of support and sustainability.",
    },
    {
      img:'./pic3.png',
      title: "Tech and Sustainability: Apps to Combat Food Waste",
      date: "June 22, 2024",
      author: "Zero Waste Food Initiative",
      content:
        "Technology plays a pivotal role in addressing food waste. Apps like Too Good To Go and Olio connect users with surplus food from restaurants, stores, and individuals, reducing waste and providing affordable food options. These platforms empower communities to take action against food waste, promoting a sustainable lifestyle. The success of these apps highlights the potential of tech-driven solutions in creating a zero-waste future.",
    },
    {
      img:'./pic6.png',
      title: "Collaborative Efforts: Restaurants and Zero Waste Practices",
      date: "May 30, 2024",
      author: "Zero Waste Food Initiative",
      content:
        "Restaurants are key players in the fight against food waste. Many establishments are adopting zero-waste practices, such as composting, donating excess food, and utilizing every part of ingredients. These initiatives not only minimize waste but also raise awareness among consumers about sustainable dining. Collaboration between restaurants, NGOs, and consumers is crucial in building a culture of zero waste and ensuring food security for all.",
    },
  ];

  return (
    <div className="p-0 ">
    <ScrollTop/>
      <div className="pt-4 pl-3">
        <Link to="/">
          <h1 className=" lg:text-xl text-sm font-semibold flex gap-2 items-center">
            <FaArrowLeft />
            Back
          </h1>
        </Link>
      </div>
      {/* <div className="xl:p-10 ">
        <img src={Educationbanner} alt="" />
      </div> */}
      {/* marque */}
      <Sponser />
      <div className=" py-9 flex-col justify-start ">
        <div className="p-5 space-y-5 xl:space-y-10 xl:flex xl:justify-center xl:items-center xl:flex-col">
          <h1 className="text-2xl font-semibold xl:tracking-widest xl:text-center">
            IMPORTANCE OF DONATION
          </h1>
          <p className=" text-sm xl:text-center xl:w-[1052px] xl:tracking-wider xl:leading-8">
            Donating is a powerful way to make a meaningful impact on the lives
            of those in need, providing you with a profound sense of purpose and
            fulfillment. By contributing, you directly help individuals and
            families, fostering a deep connection to your community and
            understanding local challenges. This act of generosity not only
            brings personal satisfaction and gratitude but also sets a positive
            example for others, inspiring them to follow your lead.
            <br />
            <br />
            Ultimately, donating allows you to play an active role in creating
            positive change, making the world a better place while growing
            personally and connecting with those around you.
          </p>
        </div>
        {/* shorts */}
        <div>
          <div className="flex justify-center items-center xl:p-10 p-5">
            <img
              src="./E_Elyx_02.png"
              alt=""
              className="rounded-3xl pointer-events-none xl:h-[360px]"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center   p-5 gap-10 xl:p-10">
            <iframe
              className="lg:w-96 h-[360px] w-full lg:h-52 lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/epB33CUpeY8?si=iC3XdZJfMFw8fuco"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96  lg:h-52   lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/pUbwdOmKyLY?si=aOhxcNc-2BL3nslz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96   lg:h-52  xl:hidden  lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/drGeDmBXNuU?si=bJIMPfSB-Xp7Itpr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className="p-5 xl:p-10">
        <h1 className="text-2xl font-semibold  font-poppins xl:tracking-widest xl:text-center">
          GALLERY
        </h1>
        <div className="mt-10">
          <img src={gallery} alt="" />
        </div>
      </div>
      {/* blog */}
      <div
        style={{
        
          backgroundImage: `url(${blogbg})`,
        }}
        className=" p-5 xl:p-10"
      >
        <h1 className="text-3xl text-gray-600 font-semibold capitalize xl:tracking-widest xl:text-center">
          Blog
        </h1>
        <div className="flex md:justify-center justify-center lg:gap-8 gap-5 lg:p-6  mt-10 flex-wrap ">
          {Blog.map((items, i) => (
            <div className="p-4 bg-black text-white w-[320px] md:w-[440px] md:h-[566px] xl:w-[340px] xl:h-[620px]   rounded-[20px] space-y-3">
            <img src={items.img} alt="" className=" w-full lg:h-52 h-30 rounded-2xl" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">
              {items.author} | <span className="pl-2">{items.date}</span> 
            </p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
             {items.title}
            </h1>
            <p className="lg:text-[11px] text-xs lg:py-2 py-1">
            {items.content}
            </p>
              <div className="flex justify-start xl:justify-center xl:items-center">
                <Button
                  msg="Read..."
                  className=" bg-black hover:text-orange-600 xl:mb-5  xl:border xl:px-7 xl:py-[3px] xl:rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            msg="See More"
            className="bg-[#EFEFEF] text-orange-500 rounded-lg m-4 border-2 border-black w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;