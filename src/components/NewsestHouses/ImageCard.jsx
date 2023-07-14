import { cameraIcon, messageIcon, specialIcon } from "../../assets/svg/svg";
import { convertToPersianNumber } from "../../lib/helper";
import style from "../../styles/NewsHouses.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

const ImageCard = ({ item }) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="swiper-button-next">{messageIcon}</div>
      <div className="swiper-button-prev"></div>
    </>
  );
};

export default ImageCard;

{
  /* <div className="relative">
<img
  className=" h-[200px] w-full rounded-[10px]"
  src={item?.img}
  alt=""
/>
<div
  className={`absolute bottom-4 left-[10%] rounded-md bg-white p-2 sm:left-3 ${style.timeText}`}
>
  {item?.time}
</div>
<div className="absolute right-3 top-3 flex items-center  ">
  <div
    className={`flex flex-row-reverse rounded-lg bg-special p-2 font-IRANYekanWeb ${
      !item?.special && "hidden"
    } `}
  >
    <span className={`mx-1 ${style.specialText}`}>فروش ویژه</span>
    <span> {specialIcon}</span>
  </div>
  <div
    className={`mr-2 ${style.presell} rounded-lg bg-precell px-4 py-2`}
  >
    پیش فروش
  </div>
</div>
<div className="absolute left-5 top-3 rounded-md bg-white p-2 ">
  {item?.logo}
</div>
<div className={` absolute bottom-4   right-[10%] flex-col bg-[#101737] sm:right-3   ${style.cameraText}  `}>
  <div className={` rounded-md  text-white text-center`}>
    {convertToPersianNumber(item?.media?.length)}
  </div>
  <div className="p-2">{cameraIcon}</div>
</div>
</div>  */
}
