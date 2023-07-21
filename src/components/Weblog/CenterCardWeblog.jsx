import React from "react";
import ProflieCard from "../CardSldierAndContents/ProflieCard";
import WeblogProfileCard from "./WeblogProfileCard";

const CenterCardWeblog = () => {
  return (
    <div className="flex justify-center transform  p-8  bb">
      <div className=" rounded-[17px] bg-white p-2  max-w-xl overflow-hidden ">
    <div className="flex flex-col overflow-auto">
    <div className="flex justify-center">
          <img
            src="/public/static/photos/optimized/w2.png"
            className=" rounded-[14px]"
            alt=""
          />
        </div>
        <div className="my-2 flex  space-y-5 flex-col  ">
          <h2 className="text-right cursor-pointer font-IRANYekanWeb text-[20px] leading-[145.609%] tracking-[-0.42px] text-[#101737] duration-200 ease-linear hover:text-main-green">چگونه یک  ملک زیبا داشته باشیم ؟؟</h2>
          <p className="text-right pl-4 text-[14px] font-normal not-italic leading-[151.209%] tracking-[-0.294px] text-[#9EA1AC] w-">اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.</p>
          <WeblogProfileCard />
        </div>
    </div>
      </div>
    </div>
  );
};

export default CenterCardWeblog;
