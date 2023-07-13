import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { observe } from "../../assets/svg/svg";
import style from "../../styles/NewsHouses.module.css";
import { useEffect, useRef, useState } from "react";
import second from "../../assets/img/backGround.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Card from "./Card";
const WithSwiper = ({ cases }) => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();
  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };
  const { isLast, isFirst } = slideBegOrNot;

  return (
    <div className="mt-[170px] max-w-[1201px] mx-auto relative">
      <div className=" flex items-stretch sm:justify-between justify-center    ">
        <div>
          <div className="sm:flex  bg-main-gray px-5 py-4 cursor-pointer  rounded-[10px] mt-6 lg:mx-5  hidden">
            <div className="text-white ">مشاهده همه</div>
            <div className="mr-2">{observe}</div>
          </div>
        </div>
        <div className="">
          <h4 className={`font-IRANYekanWeb text-main-green ${style.h4}`}>
            خونه جدیدتو پیدا کن !
          </h4>
          <h1 className={`${style.h1}`}>جدیدترین ملک ها</h1>
        </div>
        <div className="sm:flex  items-center lg:mx-5 sm:mx-7 hidden">
          <div
            className={`p-3 ml-2 cursor-pointer bg-main-green rounded-[10px] text-white ${
              isFirst  && "opacity-50"
            } `}
            onClick={handlePrev}
          >
            {<ArrowLongRightIcon className="h-6 w-6  " />}
          </div>
          <div
            className={`p-3 cursor-pointer bg-main-green rounded-[10px] text-white disabled:opacity-60 ${
              isLast  && "opacity-50"
            } `}
            onClick={handleNext}
          >
            {<ArrowLongLeftIcon className="h-6 w-6  " />}
          </div>
        </div>
      </div>
      <div className="mt-[76px] ">
        <div data-aos="fade-up" className="">
          <Swiper
            ref={SlideRef}
            dir="rtl"
            autoplay={{
                delay: 6500,
                disableOnInteraction: false,
              }}
            onSlideChange={onSlideChange}
            spaceBetween={100}
            modules={[Pagination, Navigation, A11y,Autoplay]}
            className="text-center mx-10 relative"
            breakpoints={{
                0: {
                   slidesPerView: 1,
                },
           
                502: {
                   slidesPerView: 2,
                },
               
                992: {
                   slidesPerView: 3,
                   
                },
             
             }}
          >
            <SwiperSlide ><Card/></SwiperSlide>
          

          </Swiper>
          <div>
          <div className="sm:hidden w-[50%]  bg-main-gray px-5 py-4 text-center mx-auto cursor-pointer justify-center rounded-[10px] mt-6 lg:mx-5  flex">
            <div className="text-white ">مشاهده همه</div>
            <div className="mr-2">{observe}</div>
          </div>
          <span
            className={`p-3 absolute inline-block sm:hidden right-[5%] top-[30%] z-10 ml-2 cursor-pointer bg-main-green rounded-[10px] text-white ${
              isFirst  && "opacity-50"
            } `}
            onClick={handlePrev}
          >
            {<ArrowLongRightIcon className="h-6 w-6  " />}
          </span>
          <div
            className={`p-3 cursor-pointer  sm:hidden inline-block absolute left-[5%] top-[30%] z-10 bg-main-green rounded-[10px] text-white disabled:opacity-60 ${
              isLast  && "opacity-50"
            } `}
            onClick={handleNext}
          >
            {<ArrowLongLeftIcon className="h-6 w-6  " />}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WithSwiper;
