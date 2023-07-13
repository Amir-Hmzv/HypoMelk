import React from "react";
import second from "../../assets/img/backGround.png";
import style from "../../styles/NewsHouses.module.css";
const Card = () => {
  return (
    <div
      className={`mx-10 my-[18px] cursor-pointer z-20 rounded-[10px] p-2 lg:mx-0 ${style.cardShadow} `}
    >
      <img
        className=" h-[200px] w-full rounded-[10px]"
        src={"/public/Rectangle 17.png"}
        alt=""
      />
      <div className="mr-1">
        <h1 className={`text-right text-[21px] ${style.cardTitle} mx-1 my-3`}>
          فروش آپارتمان ساحلی قواره دوم دریا در آویدر نوشهر
        </h1>
        <ul className="mt-[17px]   flex text-right font-IRANYekanWeb text-[14px] font-[700] text-[#101737]  ">
          <li className="relative mx-1 after:mr-2 after:hidden after:h-1 after:w-1 after:rounded-full  after:bg-gray-500 after:content-[''] after:lg:inline-block">
          ۱۰۲ متر
          </li>
          <li className="relative mx-1 after:mr-2 after:hidden after:h-1 after:w-1 after:rounded-full after:bg-gray-500 after:content-[''] after:lg:inline-block">
            سه خوابه
          </li>
          <li className="relative mx-1 after:mr-2 after:hidden after:h-1 after:w-1 after:rounded-full after:bg-gray-500 after:content-[''] after:lg:inline-block">
            دو طبقه{" "}
          </li>
          <li className="mx-1">نوساز</li>
        </ul>
          <div className={` text-right flex justify-between items-baseline mx-4 mt-[18px]`}>
            <div className={`${style.meterPrice}`}>۲۳۲  میلیارد <span className="text-[16px] mr-1 text-gray-600">تومان</span></div>
            <div className={`${style.meterPrice2}`}>(متری ۶۰ میلیون)</div>
          </div>

      </div>
    </div>
  );
};

export default Card;
