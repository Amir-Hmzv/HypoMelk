import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from "swiper/modules";
import {  useRef, useState } from "react";
import ImageCardContent from "./ImageCardContent";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { cameraIcon, specialIcon } from "../../assets/svg/svg";
import style from "../../styles/SliderAndCards.module.css";
import { convertToPersianNumber } from "../../lib/helper";
const ImageCard = ({ item }) => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SwiperRef = useRef();
  const handleNext = () => {
    SwiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SwiperRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };
  const { isLast, isFirst } = slideBegOrNot;
  return (
    <div className="relative">
      <Swiper
      allowSlideNext={false}
      allowSlidePrev={false}
      noSwiping={true}
      ref={SwiperRef}
        onSlideChange={onSlideChange}
        modules={[Navigation, A11y, Pagination]}
        className="mySwiper"
      >
        {item.media.map((image, i) => {
          return (
            <SwiperSlide key={i} className="re">
              <ImageCardContent
                item={item}
                image={image}
                
              />
   
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className=" inset  relative  z-20 ">
      <div
        onClick={handleNext}
        className={`prev absolute left-3 bottom-[89px]  rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isLast && 'opacity-50'}`}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </div>
      <div
        onClick={handlePrev}
        className={`next absolute right-3 bottom-[89px] rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isFirst && 'opacity-50'}`}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </div>
      <div
        className={`absolute bottom-2 left-[10%] rounded-md font-IRANYekanWeb bg-white p-2 sm:left-3 ${style.timeText}`}
      >
        {convertToPersianNumber(item?.time)}
      </div>
      <div className="absolute right-3 bottom-[149px] flex items-center  ">
        <div
          className={`flex flex-row-reverse rounded-lg bg-special whitespace-nowrap p-1 lg:p-2 font-IRANYekanWeb ${
            !item?.special && "hidden"
          } `}
        >
          <span className={`mx-1 font-IRANYekanWeb ${style.specialText} `}>فروش ویژه</span>
          <span> {specialIcon}</span>
        </div>
        <div
          className={`mr-2 ${style.presell} ${!item.Presell && 'hidden'} rounded-lg bg-precell whitespace-nowrap  p-1 lg:p-2`}
        >
          پیش فروش
        </div>
      </div>
      <div className="absolute left-5 top-[-187px] rounded-md bg-white p-2 ">
        {item?.logo}
      </div>
      <div
        className={` absolute bottom-2    right-[14%] flex-col bg-[#101737] sm:right-3   ${style.cameraText}  `}
      >
        <div className={` rounded-md  text-center text-white`}>
          {convertToPersianNumber(item?.media?.length)}
        </div>
        <div className="px-2 py-1">{cameraIcon}</div>
      </div>
    </div>
    </div>
  );
};

export default ImageCard;
