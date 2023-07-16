import React from "react";
import { cameraIcon, specialIcon } from "../../assets/svg/svg";
import style from "../../styles/SliderAndCards.module.css";
import { convertToPersianNumber } from "../../lib/helper";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ImageCardContent = ({ item, ...rest }) => {
  const { handleNext, handlePrev, isLast, isFirst, image } = rest;
  console.log(handleNext);
  return (
    <div className="relative inset-0 ">
      <div
        onClick={handleNext}
        className={`prev absolute left-3 top-[50%] rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isLast && 'opacity-50'}`}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </div>
      <div
        onClick={handlePrev}
        className={`next absolute right-3 top-[50%] rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isFirst && 'opacity-50'}`}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </div>
      <img className="  h-[200px] w-full rounded-t-[16px] inline" src={image} alt="" />
      <div
        className={`absolute bottom-2 left-[10%] rounded-md font-IRANYekanWeb bg-white p-2 sm:left-3 ${style.timeText}`}
      >
        {item?.time}
      </div>
      <div className="absolute right-3 top-3 flex items-center  ">
        <div
          className={`flex flex-row-reverse rounded-lg bg-special p-1 lg:p-2 font-IRANYekanWeb ${
            !item?.special && "hidden"
          } `}
        >
          <span className={`mx-1 ${style.specialText} `}>فروش ویژه</span>
          <span> {specialIcon}</span>
        </div>
        <div
          className={`mr-2 ${style.presell} ${!item.Presell && 'hidden'} rounded-lg bg-precell  p-1 lg:p-2`}
        >
          پیش فروش
        </div>
      </div>
      <div className="absolute left-5 top-3 rounded-md bg-white p-2 ">
        {item?.logo}
      </div>
      <div
        className={` absolute bottom-2   right-[10%] flex-col bg-[#101737] sm:right-3   ${style.cameraText}  `}
      >
        <div className={` rounded-md  text-center text-white`}>
          {convertToPersianNumber(item?.media?.length)}
        </div>
        <div className="px-2 py-1">{cameraIcon}</div>
      </div>
    </div>
  );
};

export default ImageCardContent;
