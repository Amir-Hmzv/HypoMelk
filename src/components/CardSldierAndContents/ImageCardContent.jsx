import { cameraIcon, specialIcon } from "../../assets/svg/svg";
import style from "../../styles/SliderAndCards.module.css";
import { convertToPersianNumber } from "../../lib/helper";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ImageCardContent = ({ item, ...rest }) => {
  const { handleNext, handlePrev, isLast, isFirst, image } = rest;
  console.log(handleNext);
  return (
    <div className="relative inset-0 ">

      <img className="  h-[200px] w-full rounded-t-[16px] inline" src={image} alt="" />

    </div>
  );
};

export default ImageCardContent;
