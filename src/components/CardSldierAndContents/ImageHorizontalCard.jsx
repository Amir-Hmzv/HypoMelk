import React, { useRef, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageHorizontalCardContent from "./ImageHorizontalCardContent";
import style from '../../styles/SliderAndCards.module.css'
import 'swiper/css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { cameraIcon, specialIcon } from './../../assets/svg/svg';
import { convertToPersianNumber } from './../../lib/helper';
const ImageHorizontalCard = ({ item }) => {
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
    <>
      <Swiper
        dir="rtl"
        
        allowSlideNext={true}
        allowSlidePrev={true}
        ref={SwiperRef}
        onSlideChange={onSlideChange}
        modules={[A11y]}
        className="mySwiper"
        noSwipingClass="nosp"
        slidesPerView={1}
      >
        {item.media.map((image, i) => {
          return (
                <div className="relative">
                     <SwiperSlide key={i} >
            <ImageHorizontalCardContent
                item={item}
                image={image}
                handleNext={handleNext}
                handlePrev={handlePrev}
                isFirst={isFirst}
                isLast={isLast}
              />
              
            </SwiperSlide>
                
                </div>
          );
        })}
    <div className="">
    <div
        onClick={handleNext}
        className={`prev absolute z-10 left-3 top-[50%] rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isLast && 'opacity-50'}`}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </div>
      <div
        onClick={handlePrev}
        className={`next absolute z-10  right-3 top-[50%] rounded-full bg-white p-[3px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] ${isFirst && 'opacity-50'}`}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </div>
      <div
        className={`z-10 absolute bottom-4 lg:bottom-2  left-[3%] rounded-md bg-white p-2 sm:left-3 ${style.timeText}`}
      >
        {convertToPersianNumber(item?.time)}
      </div>
      <div className="absolute z-10 right-3 top-3 flex items-center  ">
        <div
          className={`flex flex-row-reverse rounded-lg bg-special py-1 font-IRANYekanWeb ${
            !item?.special && "hidden"
          } `}
        >
          <span className={`mx-1 ${style.specialText} z-10`}>فروش ویژه</span>
          <span> {specialIcon}</span>
        </div>
        <div
          className={`mr-2 z-10 ${style.presell} ${!item.Presell && 'hidden'} rounded-lg bg-precell px-2 py-1`}
        >
          پیش فروش
        </div>
      </div>
      <div className="absolute left-3 top-3 rounded-md bg-white p-2 z-10">
        {item?.logo}
      </div>
      <div
        className={` absolute bottom-4 lg:bottom-2    z-10  right-[3%] flex-col bg-[#101737] sm:right-3   ${style.cameraText}  `}
      >
        <div className={` rounded-md  text-center text-white`}>
          {convertToPersianNumber(item?.media?.length)}
        </div>
        <div className="px-2 py-1">{cameraIcon}</div>
      </div>
    </div>
      </Swiper>
      {/* <div className="absolute inset-0">
              <div className="bg-yellow-500">sasa</div>
            </div> */}
    </>
  );
};
export default ImageHorizontalCard;
