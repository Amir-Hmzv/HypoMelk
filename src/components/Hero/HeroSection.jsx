import { ChevronDownIcon } from "@heroicons/react/24/solid";
import style from "../../styles/HeroSection.module.css";
import MainBackground from "./MainBackground";
import MainSearchInput from "./MainSearchInput";
import MainnTitles from "./MainTitles";
import SearchOption from "./SearchOption";
import { MouseIcon } from "../../assets/svg/svg";

const HeroSection = ({ heroImage }) => {
  return (
    <>
      <main className="w-full  overflow-x-hidden  ">
        <div className="w-full lg:max-w-[1201px]  mx-auto ">
          <div
            className="grid grid-cols-1
            lg:grid-cols-2 "
          >
            <div className="mt-[10%] ">
              <MainnTitles />
              <MainSearchInput />
              <MainBackground heroImage={heroImage} />
              <form className={`space-y-9  lg:space-y-0  lg:mt-[10%] 2xl:mt-[14%] grid grid-cols-1 place-items-center my-5   lg:flex-nowrap   lg:flex  z-[30]  lg:justify-between xl:justify-between w-full min-[1220px]:w-[90%]  xl:w-[80%] 2xl:w-[80%] px-5 lg:px-8 xl:px-0   `}>
                <SearchOption />
              </form>
              <div className="w-full mx-auto flex  relative lg:right-[50%] z-[15] ">
                <div className="lg:mt-[173px]   mt-[0%] invisible lg:visible mx-auto   bg-main-green  justify-center  p-2 cursor-pointer rounded-full flex ">
                  {MouseIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;