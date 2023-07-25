import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowIconLeft,
  ArrowIconRight,
  HeadTitles,
  ObserveButton,
} from "../CardSldierAndContents";
import { useEffect, useRef, useState } from "react";
import CenterCardWeblog from "./CenterCardWeblog";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import service from "../../services/base.service";
import "swiper/css";

const Weblog = () => {
  const [weblogCards, setweblogCards] = useState([]);

  useEffect(() => {
    service.get("/real/weblog/", (res) => {
      const originalResults = res.data?.results;
      const repeatedResults = originalResults.concat(originalResults.slice());
      setweblogCards(repeatedResults);
    });

    return () => {};
  }, []);

  const duplicateSlidesForLooping = (slides, loopedSlides) => {
    const additionalSlides = [];
    for (let i = 0; i < loopedSlides; i++) {
      additionalSlides.push(slides[i]);
    }
    return additionalSlides.concat(slides).concat(additionalSlides);
  };
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
    <div className="mt-64 w-full overflow-visible bg-gray-100 py-14 ">
      <div className="mx-auto max-w-[1201px]">
        <div className=" flex items-stretch justify-center sm:justify-between  md:px-5 lg:px-8  xl:px-0  ">
          <ObserveButton style={"hidden sm:flex lg:mx-5"} />
          <HeadTitles
            title={`      وبلاگ اختصاصی ما`}
            smallTitle={`    از آخرین اخبار اطلاع دارید؟؟`}
          />

          <div className="hidden  items-center sm:mx-7 sm:flex lg:mx-5">
            <ArrowIconRight isFirst={false} handlePrev={handlePrev} />
            <ArrowIconLeft isLast={false} handleNext={handleNext} />
          </div>
        </div>
        <div className=" " data-aos="fade-up">
          <Swiper
            ref={SlideRef}
            onSlideChange={onSlideChange}
            dir="rtl"
            grabCursor={true}
            spaceBetween={80}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            slidesPerView={3}
            loop={true}
            className={`sp  `}
            modules={[A11y, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              700: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {weblogCards.length > 0 &&
              duplicateSlidesForLooping(weblogCards, 2).map((item, i) => (
                <SwiperSlide key={i} className="h-full w-full   ">
                  <CenterCardWeblog item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="my-10 space-y-8">
            <div className="flex justify-center sm:hidden">
              <ArrowIconRight isFirst={false} handlePrev={handlePrev} />
              <ArrowIconLeft isLast={false} handleNext={handleNext} />
            </div>

            <ObserveButton
              style={"flex w-[50%] mx-auto justify-center sm:hidden "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weblog;
