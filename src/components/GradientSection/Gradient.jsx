import React from "react";

const Gradient = ({ title,bg }) => {
  return (
    <div className="mx-auto hidden max-w-[1201px] cursor-pointer  rounded-xl px-8 md:block xl:px-0">
      <div className=" flex h-[223px] w-full    flex-row-reverse justify-center rounded-[17px]">
        <div className="relative h-full w-[45%] rounded-l-[17px] bg-main-green to-transparent">
          <div className="absolute  left-[50%]  top-[50%] translate-x-[-30%] translate-y-[-50%]  items-center ">
            <h3 className="text-center  font-IRANYekanWeb text-[30px] font-[800] leading-[170.509%] tracking-[-1.05px] text-white">
              {title}
            </h3>
          </div>
          <span className="absolute left-[10%] top-[50%]  mr-5  translate-y-[-50%]">
     <svg xmlns="http://www.w3.org/2000/svg" width={37} height={37} viewBox="0 0 37 37" fill="none">
  <path d="M24.9596 3.08325H12.0404C6.42876 3.08325 3.08334 6.42867 3.08334 12.0403V24.9441C3.08334 30.5712 6.42876 33.9166 12.0404 33.9166H24.9442C30.5558 33.9166 33.9013 30.5712 33.9013 24.9595V12.0403C33.9167 6.42867 30.5713 3.08325 24.9596 3.08325ZM27.75 19.6562H12.0404L16.6808 24.2966C17.1279 24.7437 17.1279 25.4837 16.6808 25.9308C16.4496 26.162 16.1567 26.2699 15.8638 26.2699C15.5708 26.2699 15.2779 26.162 15.0467 25.9308L8.43293 19.317C8.21709 19.1012 8.09376 18.8083 8.09376 18.4999C8.09376 18.1916 8.21709 17.8987 8.43293 17.6828L15.0467 11.0691C15.4938 10.622 16.2338 10.622 16.6808 11.0691C17.1279 11.5162 17.1279 12.2562 16.6808 12.7033L12.0404 17.3437H27.75C28.3821 17.3437 28.9063 17.8678 28.9063 18.4999C28.9063 19.132 28.3821 19.6562 27.75 19.6562Z" fill="white" />
</svg>

          </span>
        </div>
        <div className={`relative h-full w-[100%] rounded-r-[17px] ${bg} bg-cover bg-no-repeat px-20`}>
          <div className="z-5 absolute inset-0 bg-gradient-to-r  from-main-green from-[0%] to-transparent to-[90%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;


