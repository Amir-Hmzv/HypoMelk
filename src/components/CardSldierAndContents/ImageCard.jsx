import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from "swiper/modules";
import {  useRef, useState } from "react";
import ImageCardContent from "./ImageCardContent";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

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
    <>
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
            <SwiperSlide key={i} className="">
              <ImageCardContent
                item={item}
                image={image}
                handleNext={handleNext}
                handlePrev={handlePrev}
                isFirst={isFirst}
                isLast={isLast}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
  
    </>
  );
};

export default ImageCard;
