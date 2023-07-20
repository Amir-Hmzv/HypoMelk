import { useRef, useState } from "react";
import {
  ArrowIconLeft,
  ArrowIconRight,
  HeadTitles,
  ObserveButton,
} from "../CardSldierAndContents";

const Representatives = () => {
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
      <div className="w-full bg-[#F7F9FC] ">
        <div className="relative mx-auto max-w-[1201px] py-10 ">
          <div className="   md:px-5 lg:px-8  xl:px-0  ">
            <HeadTitles
              smallTitle={`   ویلای ساحلی مورد علاقتو پیدا کن !`}
              title={`جدیدترین ویلا های ساحلی`}
            />
            <div className="mt-[23px]">
              <div className="relative min-h-[349px] w-[302px] rounded-[36px] border-2 bg-white">
                <div className="absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%] ">
                  <div className="relative h-[150px] w-[150px] rounded-full bg-red-500">
                    <div className="relative space-y-2 rounded-full">
                      <img
                        src="/public/static/photos/God_Avatar.jpg"
                        className=" z-5 inset-0 rounded-full border-4 border-main-green"
                        alt=""
                      />
                      <h4 className="my-1 text-center font-IRANYekanWeb  font-[700] leading-[145.609%] tracking-[-0.49px]">
                        پوریا حدادی
                      </h4>
                      <span className="block text-center  font-IRANYekanWeb text-[10px] font-[500] leading-[145.609%] tracking-[-0.21px] text-[#8A8989]">
                        مشاور املاک
                      </span>
                      <p className="text-[11px] text-center font-IRANYekanWeb text-[#5E5F66] font-[400] tracking-[151.209%] leading-[151.209%]">
                        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار
                        دارید به متن های برخورده اید که با نام لورم ایپسوم
                        شناخته می‌شوند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
