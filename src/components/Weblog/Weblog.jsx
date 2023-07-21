import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowIconLeft,
  ArrowIconRight,
  HeadTitles,
  ObserveButton,
} from "../CardSldierAndContents";
import { useRef, useState } from "react";
import CenterCardWeblog from "./CenterCardWeblog";

const Weblog = () => {
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
    <div className="mt-64 w-full bg-gray-100 py-14 ">
      <div className="mx-auto max-w-[1201px]">
        <div className=" flex items-stretch justify-center sm:justify-between  md:px-5 lg:px-8  xl:px-0  ">
          <ObserveButton style={"hidden sm:flex lg:mx-5"} />
          <HeadTitles
            title={` خونه جدیدتو پیدا کن !`}
            smallTitle={`جدید ترین ملک ها`}
          />

          <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
            <ArrowIconRight isFirst={false} handlePrev={handlePrev} />
            <ArrowIconLeft isLast={false} handleNext={handleNext} />
          </div>
        </div>
        <div className="mt-10  " data-aos='fade-up'>
          <Swiper
            slidesPerView={3}
            roundLengths={true}
            loop={true}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            spaceBetween={30}
            centeredSlides={true}
            className="sp"
          >
            <SwiperSlide className="transform "><CenterCardWeblog/></SwiperSlide>
            <SwiperSlide className=""><CenterCardWeblog/></SwiperSlide>
            <SwiperSlide className=""><CenterCardWeblog/></SwiperSlide>
            <SwiperSlide className=""><CenterCardWeblog/></SwiperSlide>
            <SwiperSlide className=""><CenterCardWeblog/></SwiperSlide>
            <SwiperSlide className=""><CenterCardWeblog/></SwiperSlide>


          </Swiper>
             <div className="my-10 space-y-8">
            <div className="flex justify-center sm:hidden">
              <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} />
              <ArrowIconLeft isLast={isLast} handleNext={handleNext} />
            </div>
          
            <ObserveButton style={'flex w-[50%] mx-auto justify-center sm:hidden '}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weblog;
