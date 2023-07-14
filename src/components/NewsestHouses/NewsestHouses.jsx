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
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";
import { data } from "../../lib/data";
const NewsestHouses = ({ cases }) => {


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
    <div className="relative mx-auto mt-[170px] max-w-[1201px]">
      <div className=" flex items-stretch justify-center sm:justify-between    ">
        <div>
          <div className="mt-6  hidden cursor-pointer rounded-[10px] bg-main-gray  px-5 py-4 sm:flex  lg:mx-5">
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
        <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
          <div
            className={`ml-2 cursor-pointer rounded-[10px] bg-main-green p-3 text-white ${
              isFirst && "opacity-50"
            } `}
            onClick={handlePrev}
          >
            {<ArrowLongRightIcon className="h-6 w-6  " />}
          </div>
          <div
            className={`cursor-pointer rounded-[10px] bg-main-green p-3 text-white disabled:opacity-60 ${
              isLast && "opacity-50"
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
            spaceBetween={10}
            modules={[Pagination, Navigation, A11y, Autoplay]}
            className="relative mx-10 text-center"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              802: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
            }}
          >
            {
              data.map((item,key) => {
            return    <SwiperSlide key={key} className="lg:my-10 lg:mx-5">
              <Card item={item} />
            </SwiperSlide>
              })
            }
          </Swiper>
          <div>
            <div className="mx-auto mt-6  flex w-[50%] cursor-pointer justify-center rounded-[10px] bg-main-gray px-5 py-4 text-center sm:hidden  lg:mx-5">
              <div className="text-white ">مشاهده همه</div>
              <div className="mr-2">{observe}</div>
            </div>
            <span
              className={`absolute right-[5%] top-[30%] z-10 ml-2 inline-block cursor-pointer rounded-[10px] bg-main-green p-3 text-white sm:hidden ${
                isFirst && "opacity-50"
              } `}
              onClick={handlePrev}
            >
              {<ArrowLongRightIcon className="h-6 w-6  " />}
            </span>
            <div
              className={`absolute left-[5%]  top-[30%] z-10 inline-block cursor-pointer rounded-[10px] bg-main-green p-3 text-white disabled:opacity-60 sm:hidden ${
                isLast && "opacity-50"
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

export default NewsestHouses;
