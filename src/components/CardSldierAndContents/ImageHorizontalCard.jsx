import React, { useRef, useState } from 'react'

const ImageHorizontalCard = ({item}) => {
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
export default ImageHorizontalCard