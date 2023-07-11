import style from "../../styles/HeroSection.module.css";
import { searchBox, searchButton } from "../../assets/svg/svg";

const MainSearchInput = () => {
  return (
    <>
      <div className=" xl:block flex justify-center mt-[39px] px-5 lg:px-0 relative mb-7 ">
        <div className="relative flex w-[475px] h-[56px]  rounded-[28px] z-20">
          <input
            type="text"
            placeholder="جستجوی کد ملکی"
            className={`${style.shadowCustom}  rounded-[28px] pr-3 outline-none flex justify-center w-full h-full`}
          />
          <div className="absolute left-[2%] top-[9%]">
            <div className="">{searchBox}</div>
            <button className="bg-main-green absolute bottom-[30%] right-[27%] ">
              {searchButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSearchInput;
