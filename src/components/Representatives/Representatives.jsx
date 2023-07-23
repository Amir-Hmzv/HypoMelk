import { useRef, useState } from "react";
import "swiper/css";

import {
  ArrowIconLeft,
  ArrowIconRight,
  HeadTitles,
  ObserveButton,
} from "../CardSldierAndContents";
import RepresentativeCard from "./RepresentativeCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Representatives = ({ users }) => {
  console.log(users);
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
    <>
      <div className="w-full bg-[#F7F9FC] px-3">
        <div className="relative mx-auto  max-w-[1201px] py-10 ">
          <div className="   md:px-5 lg:px-8  xl:px-0  ">
            <HeadTitles
              smallTitle={`نمایندگان با پشتکار ما`}
              title={`با نمایندگان ما آشنا شوید`}
            />
            <div className="mt-[23px]  flex justify-center  " data-aos='fade-up' >
              <div className=" flex items-center">
              <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} customStyle={'relative md:static '}/>
              </div>
              
              <Swiper
                ref={SlideRef}
                dir="rtl"
                onSlideChange={onSlideChange}
                spaceBetween={10}
                className=""
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },

                  700: {
                    slidesPerView: 2,
                  },

                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {users?.map((item, key) => (
                  <SwiperSlide key={key} className="flex justify-center">
                    <RepresentativeCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center">
              <ArrowIconLeft isLast={isLast} handleNext={handleNext} customStyle={'relative md:static  right-[1px]'} />
              </div>
              {/* <RepresentativeCard/>
                <RepresentativeCard/>
                <RepresentativeCard/> */}
            </div>

            {/* 
        <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
          <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} />
          <ArrowIconLeft isLast={isLast} handleNext={handleNext} />
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Representatives;
