import { LogoSvg } from "../../assets/svg/svg";
import { Divide as Hamburger } from "hamburger-react";
import style from "../../styles/Navbar.module.css";
import {
    HomeIcon,
    GlobeAltIcon,
    PhoneIcon,
    UsersIcon,
  } from "@heroicons/react/24/solid";
const MobileSection = ({isOpen,setIsOpen}) => {
  return (
    <>
      {" "}
      <nav className="bg-[#fff] md:hidden block  shadow-custom  sticky top-0 z-[100]">
        <div className="w-full h-[90px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <a
                href="#"
                className="text-white font-bold text-xl right-4 top-2 cursor-pointer block fixed"
              >
                {LogoSvg}
              </a>
            </div>

            <div className="-mr-2 flex md:hidden mt-6 ">
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Add your mobile navigation links here */}
            <div className="flex justify-between items-baseline">
              <a href="#" className={style.mobileHoverLink}>
                خانه
              </a>
              <span className=" bg-main-green h-[1px] w-[50%]	 "></span>
              <span>
                <HomeIcon className="h-6 w-6 text-main-green ml-4 relative top-2" />
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <a href="#" className={style.mobileHoverLink}>
                درباره ما
              </a>
              <span className=" bg-main-green h-[1px] w-[50%]	 "></span>
              <span>
                <UsersIcon className="h-6 w-6 text-main-green ml-4 relative top-2" />
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <a href="#" className={style.mobileHoverLink}>
                وبلاگ
              </a>
              <span className=" bg-main-green h-[1px] w-[50%]	 "></span>
              <span>
                <GlobeAltIcon className="h-6 w-6 text-main-green ml-4 relative top-2" />
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <a href="#" className={style.mobileHoverLink}>
                تماس با ما
              </a>
              <span className=" bg-main-green h-[1px] w-[50%]	 "></span>
              <span>
                <PhoneIcon className="h-6 w-6 text-main-green ml-4  relative top-2" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileSection;
