import React from "react";
import ProflieCard from "../CardSldierAndContents/ProflieCard";
import WeblogProfileCard from "./WeblogProfileCard";
import { convertToPersianNumber } from "../../lib/helper";

const CenterCardWeblog = ({ item }) => {
  const { title } = item;
  const eyeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M9.99706 7.49826C9.99706 8.66731 9.05238 9.61199 7.88333 9.61199C6.71428 9.61199 5.76959 8.66731 5.76959 7.49826C5.76959 6.32921 6.71428 5.38452 7.88333 5.38452C9.05238 5.38452 9.99706 6.32921 9.99706 7.49826Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.8833 12.381C9.96752 12.381 11.91 11.1529 13.2621 9.02734C13.7935 8.19483 13.7935 6.79552 13.2621 5.96301C11.91 3.83747 9.96752 2.60938 7.8833 2.60938C5.79909 2.60938 3.85658 3.83747 2.5045 5.96301C1.97311 6.79552 1.97311 8.19483 2.5045 9.02734C3.85658 11.1529 5.79909 12.381 7.8833 12.381Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const messageIcon = <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
  <path d="M6.9649 15.9109H6.56972C3.40825 15.9109 1.82751 15.1205 1.82751 11.1687V7.21681C1.82751 4.05534 3.40825 2.47461 6.56972 2.47461H12.8927C16.0541 2.47461 17.6349 4.05534 17.6349 7.21681V11.1687C17.6349 14.3301 16.0541 15.9109 12.8927 15.9109H12.4975C12.2525 15.9109 12.0154 16.0294 11.8652 16.227L10.6796 17.8077C10.158 18.5033 9.30439 18.5033 8.78275 17.8077L7.5972 16.227C7.47074 16.0531 7.1783 15.9109 6.9649 15.9109Z" stroke="white" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M12.8899 9.58781H12.897" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M9.72762 9.58781H9.73472" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6.56537 9.58781H6.57247" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>

  return (
    <div className="bb   flex justify-center flex-col   w-full   px-2" >
      <div className=" max-w-lg m-4 overflow-hidden rounded-[17px]  bg-white p-2   " style={{boxShadow: '0px 0px 34px -9px rgba(12, 46, 96, 0.25)'
    }}>
        <div className=" ">
          <div className="relative flex justify-center">
            <img
              src={item?.cover}
              className=" h-[200px] w-full rounded-[14px] object-cover"
              alt=""
            />
            <div className=" absolute flex  bottom-3 left-3 rounded-[9px]  p-1 lg:p-2 ">
              <div className="flex flex-col mx-2 justify-center space-y-1 bg-[#101737] rounded-[9px] px-2 py-1 ">
                <span
                  className="  text-center tracking-[-0.385px];  text-[11px] font-extrabold not-italic leading-[165.409%] text-white
"
                >
                  {convertToPersianNumber(item.view)}
                </span>
                <span>{eyeIcon}</span>
              </div>
              <div className="flex flex-col justify-center space-y-1 bg-[#101737] rounded-[9px] px-2 py-1 ">
                <span
                  className="  text-center tracking-[-0.385px];  text-[11px] font-extrabold not-italic leading-[165.409%] text-white
"
                >
                  {convertToPersianNumber(item.review_count)}
                </span>
                <span>{messageIcon}</span>
              </div>
            </div>
            <div className="bg-[#6DC175 absolute left-3 top-3 rounded-[9px] bg-white p-1 lg:p-2 ">
              <span className=" text-right font-IRANYekanWeb text-[14px] font-extrabold  leading-[165.409%] tracking-[-0.35px] text-[#535353]">
                {" "}
                {convertToPersianNumber(item.time)} روز پیش{" "}
              </span>
            </div>
            <div className="absolute right-3  top-3 flex flex-row-reverse rounded-[9px]  bg-[#6DC175] p-1 text-right font-IRANYekanWeb text-sm font-extrabold not-italic leading-[165.409%] tracking-[-0.49px] text-white lg:p-2 ">
              <span className="mx-2">دو دقیقه مطالعه</span>
              <span>
             <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
  <path d="M19.5653 13.0747C19.5653 17.608 15.8861 21.2871 11.3529 21.2871C6.81963 21.2871 3.14047 17.608 3.14047 13.0747C3.14047 8.54146 6.81963 4.8623 11.3529 4.8623C15.8861 4.8623 19.5653 8.54146 19.5653 13.0747Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M11.3529 8.14722V12.84" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M8.5372 2.51587H14.1686" stroke="white" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
</svg>

              </span>
            </div>
          </div>
          <div className="my-2 w-full h-full space-y-5   ">
            <h2 className="cursor-pointer   text-right p font-IRANYekanWeb text-[20px] leading-[145.609%] tracking-[-0.42px] text-[#101737] duration-200 ease-linear hover:text-main-green">
              {title}
            </h2>
            <p className=" pl-4 text-right min-h-[3em]    text-ellipsis text-[14px] font-normal not-italic leading-[151.209%] tracking-[-0.294px] text-[#9EA1AC]">
            {item.introduction}
            </p>
           <div className="">
           <WeblogProfileCard item={item} />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCardWeblog;
