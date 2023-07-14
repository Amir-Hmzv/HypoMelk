import { observe } from "../../assets/svg/svg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";
import { data } from "../../lib/data";
import ArrowIconRight from "./ArrowIconRight";
import ArrowIconLeft from "./ArrowIconLeft";
import HeadTitles from "./HeadTitles";
import ObserveButton from "./ObserveButton";
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
      <ObserveButton style={'hidden sm:flex lg:mx-5'}/>
        <HeadTitles
          title={` خونه جدیدتو پیدا کن !`}
          smallTitle={`جدید ترین ملک ها`}
        />

        <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
          <ArrowIconRight isFirst={isFirst} handlePrev={handlePrev} />
          <ArrowIconLeft isLast={isLast} handleNext={handleNext} />
        </div>
      </div>
      <div className="mt-[26px] ">
        <div data-aos="fade-up" className="">
          <Swiper
            ref={SlideRef}
            dir="rtl"
            onSlideChange={onSlideChange}
            spaceBetween={10}
            modules={[Pagination, Navigation, A11y]}
            className="relative mx-10 text-center"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              800: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((item, key) => {
              return (
                <SwiperSlide key={key} className="lg:my-10 lg:px-1">
                  <Card item={item} />
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
  );
};

export default NewsestHouses;
