import React, { useState } from "react";
import InformationList from "./InformationList";
import CardPrices from "./CardPrices";
import ProflieCard from "./ProflieCard";
import { data } from "./../../lib/data";
import style from "../../styles/SliderAndCards.module.css";
import { useSpring,animated } from "@react-spring/web";
import ImageHorizontalCard from "./ImageHorizontalCard";
import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Horizontal = ({ image, title, body, item }) => {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "translateY(-20px)" : "translateY(0)",
        config: { duration: 200,
          friction: 120,
          tension: 1000, },

  });
  return (
    <>
      <animated.div
      onMouseEnter={() => setHovered(true)} style={springProps}
      onMouseLeave={() => setHovered(false)}      
      
        className="mx-auto md:flex   relative shadowHorizontal ease duration-300 transform w-auto max-w-2xl cursor-pointer s flex-col justify-between overflow-hidden rounded-[17px] bg-white px-2 py-3 sm:flex-row"
      >
     
   <ImageHorizontalCard item={item}/>
        <div className="max-[300px] mr-2 ">
          <div className="flex text-right  lg:min-h-[80px]">
            <h2 className=" hover:text-main-green duration-300 ease-linear transition-[color] text-[21px]  tracking-[-0.4px]  font-IRANYekanWeb leading-[145.609%] text-[#101737] font-[700]">
              {item.title}
            </h2>
          </div>
          <div className="">
            <InformationList item={item} />
            <CardPrices item={item} />
            <ProflieCard item={item} />
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Horizontal;
