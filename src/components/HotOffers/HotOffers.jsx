import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {  woodData } from "../../lib/data";
import {ArrowIconLeft,ArrowIconRight,Card,HeadTitles,Horizontal,ObserveButton} from '../CardSldierAndContents'
const HotOffers = () => {
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
    <div className="w-full bg-[#F7F9FC] ">
      <div className="relative mx-auto mt-[170px] max-w-[1201px]">
      <div className=" flex items-stretch justify-center sm:justify-between  md:px-5 lg:px-8  xl:px-0  ">
      <ObserveButton style={'hidden sm:flex lg:mx-5'}/>
        <HeadTitles
          smallTitle={`پیشنهادات داغ`}
          title={`پیشنهادات باورنکردنی ملک ها`}
        />

        <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
          <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} />
          <ArrowIconLeft isLast={isLast} handleNext={handleNext} />
        </div>
      </div>
      <div className="">
        <div data-aos="fade-up" className="">
          <Swiper
            ref={SlideRef}
            dir="rtl"
            onSlideChange={onSlideChange}
            spaceBetween={10}
            modules={[Pagination, Navigation, A11y]}
            className=" mx-10 text-center"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              1200: {
                slidesPerView: 2,
              },

             
            }}
          >
            {woodData.map((item, key) => {
              return (
                <SwiperSlide key={key} className="lg:my-10 lg:px-4 overflow-hidden  flex flex-wrap items-baseline
                 py-10  px-10   ">
                    <Horizontal item={item}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="my-5 space-y-8">
            <div className="flex justify-center sm:hidden">
              <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} />
              <ArrowIconLeft isLast={isLast} handleNext={handleNext} />
            </div>
          
            <ObserveButton style={'flex w-[50%] mx-auto justify-center sm:hidden '}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default HotOffers