import React from "react";
import { motion } from "framer-motion";

function Sponser() {
    const marque = [
        { img: "./01.svg" },
        { img: "./02.svg" },
        { img: "./03.svg" },
        { img: "./04.svg" },
        { img: "./05.svg" },
        { img: "./06.svg" },
        { img: "./07.svg" },
        { img: "./08.svg" },
        { img: "./09.svg" },
        { img: "./10.svg" },
      ];
  return (
    <div className="w-full  overflow-x-hidden text-white bg-stone-700 mt-10 ">
      <div className="flex p-3">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className=" flex mx-auto flex-shrink-0"
        >
          {marque.map((items, i) => (
            <img src={items.img} alt="marquee" className="h-10 pr-20" key={i} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className=" flex mx-auto flex-shrink-0"
        >
          {marque.map((items, i) => (
            <img src={items.img} alt="marquee" className="h-10 pr-20" key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Sponser;