import style from "../../styles/HeroSection.module.css";
import { searchBox, searchButton } from "../../assets/svg/svg";

const MainSearchInput = () => {
  return (
    <>
      <div className=" relative mb-7 mt-[39px] flex justify-center px-5 lg:px-0 xl:block ">
        <div className="relative z-20 flex h-[56px]  w-[475px] rounded-[28px]">
          <input
            type="text"
            placeholder="جستجوی کد ملکی"
            className={`${style.shadowCustom}  flex h-full w-full justify-center rounded-[28px] pr-3 outline-none`}
          />
          <div className="absolute left-[2%] top-[9%]">
            <div className="">{searchBox}</div>
            <button className="absolute bottom-[30%] right-[27%] bg-main-green ">
              {searchButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSearchInput;
