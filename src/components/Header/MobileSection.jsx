import { LogoSvg } from "../../assets/svg/svg";
import { Divide as Hamburger } from "hamburger-react";
import style from "../../styles/Navbar.module.css";
import {
  HomeIcon,
  GlobeAltIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
const MobileSection = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {" "}
      <nav className="shadow-custom sticky top-0  z-[100]  block bg-[#fff] md:hidden">
        <div className="mx-auto h-[90px] w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center ">
              <a
                href="#"
                className="fixed right-4 top-2 block cursor-pointer text-xl font-bold text-white"
              >
                {LogoSvg}
              </a>
            </div>

            <div className="-mr-2 mt-6 flex md:hidden ">
              <Hamburger
                rounded
                color="#158A77"
                onToggle={(toggled) => {
                  if (toggled) {
                    setIsOpen(true);
                  } else {
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className={`menu-container ${isOpen ? "open " : " "} md:hidden`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Add your mobile navigation links here */}
            <div className="flex items-baseline justify-between">
              <a href="#" className={style.mobileHoverLink}>
                خانه
              </a>
              <span className=" h-[1px] w-[50%] bg-main-green	 "></span>
              <span>
                <HomeIcon className="relative top-2 ml-4 h-6 w-6 text-main-green" />
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <a href="#" className={style.mobileHoverLink}>
                درباره ما
              </a>
              <span className=" h-[1px] w-[50%] bg-main-green	 "></span>
              <span>
                <UsersIcon className="relative top-2 ml-4 h-6 w-6 text-main-green" />
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <a href="#" className={style.mobileHoverLink}>
                وبلاگ
              </a>
              <span className=" h-[1px] w-[50%] bg-main-green	 "></span>
              <span>
                <GlobeAltIcon className="relative top-2 ml-4 h-6 w-6 text-main-green" />
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <a href="#" className={style.mobileHoverLink}>
                تماس با ما
              </a>
              <span className=" h-[1px] w-[50%] bg-main-green	 "></span>
              <span>
                <PhoneIcon className="relative top-2 ml-4 h-6  w-6 text-main-green" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileSection;
