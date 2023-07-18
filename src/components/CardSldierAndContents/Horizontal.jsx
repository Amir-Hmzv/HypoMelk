import React from "react";
import InformationList from "./InformationList";
import CardPrices from "./CardPrices";
import ProflieCard from "./ProflieCard";
import { data } from './../../lib/data';
import style from "../../styles/SliderAndCards.module.css";



const Horizontal = ({ image, title, body, item }) => {
  return (
    <div style={{boxShadow:' 0px 0px 30.848529815673828px -12.702336311340332px rgba(12, 46, 96, 0.25)'}} className="flex flex-col sm:flex-row bg-white rounded-[17px] shadow-md overflow-hidden max-w-lg mx-auto px-4 py-2">
    <div className="flex-shrink-">
        <img className="min-h-[210px] rounded-[13px] w-full object-cover  sm:w-[600px]" src={'/public/cards/horizontal/Rectangle 2.png'} alt="" />
    </div>
    <div className="mr-2 ">
        <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-semibold text-gray-900 leading-[145.609%] tracking-[-0.4px]">
                {item.title}
            </h2>
        </div>
        <div className="">
      <InformationList item={item}/>
      <CardPrices item={item}/>
      <ProflieCard item={item}/>
        </div>
    </div>
</div>
  );
};

export default Horizontal;
