import React, { useState } from "react";
import InformationList from "./InformationList";
import CardPrices from "./CardPrices";
import ProflieCard from "./ProflieCard";
import { data } from "./../../lib/data";
import style from "../../styles/SliderAndCards.module.css";
import { useSpring,animated } from "@react-spring/web";

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
      
        className="mx-auto flex  ease duration-300 transform w-auto max-w-2xl cursor-pointer flex-col justify-between overflow-hidden rounded-[17px] bg-white px-2 py-3 shadow-md sm:flex-row"
      >
        <div className="flex-shrink-">
          <img
            className="w-full rounded-[13px] object-cover lg:h-[250px] lg:w-auto lg:max-w-[250px] "
            src={"/public/cards/horizontal/Rectangle 2.png"}
            alt=""
          />
        </div>
        <div className="max-[300px] mr-2 ">
          <div className="flex text-right lg:min-h-[80px]">
            <h2 className="tr text-[21px]  font-semibold leading-[145.609%] text-gray-400">
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
