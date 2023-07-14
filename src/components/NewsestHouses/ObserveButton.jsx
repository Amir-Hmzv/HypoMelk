import React from "react";
import { observe } from "../../assets/svg/svg";

const ObserveButton = ({style}) => {
  return (
    <div>
      <div className={`  mt-6  cursor-pointer rounded-[10px] border-main-gray bg-main-gray px-5  py-4  transition-all duration-300 ease-linear hover:bg-gray-600    ${style}`}>
        <div className="text-white">مشاهده همه</div>
        <div className="mr-2">{observe}</div>
      </div>
    </div>
  );
};

export default ObserveButton;
