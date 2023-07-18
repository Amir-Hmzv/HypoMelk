import React from "react";
import InformationList from "./InformationList";
import CardPrices from "./CardPrices";
import ProflieCard from "./ProflieCard";
import { data } from "./../../lib/data";
import style from "../../styles/SliderAndCards.module.css";

const Horizontal = ({ image, title, body, item }) => {
  return (
    <> 
      <div
        style={{
          boxShadow:
            " 0px 0px 30.848529815673828px -12.702336311340332px rgba(12, 46, 96, 0.25)",
        }}
        className="mx-auto flex w-auto max-w-2xl flex-col justify-between overflow-hidden rounded-[17px] bg-white px-2 py-1 shadow-md sm:flex-row"
      >
        <div className="flex-shrink-">
          <img
            className="h-[250px] max-w-[250px] rounded-[13px] object-cover "
            src={"/public/cards/horizontal/Rectangle 2.png"}
            alt=""
          />
        </div>
        <div className="mr-2 max-[300px] ">
          <div className="flex min-h-[80px] text-right">
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
      </div>


    </>
  );
};

export default Horizontal;
