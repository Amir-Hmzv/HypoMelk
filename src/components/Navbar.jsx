import { Link } from "react-router-dom";
import { LogoSvg } from "../assets/svg/svg";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import style from "../styles/Navbar.module.css";
import {
  HomeIcon,
  GlobeAltIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`shadow-custom ${style.nav} z-20`}>
        <ul className={`${style.ulNav}`}>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"/#"}>
              خانه
            </Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              درباره ما
            </Link>
          </li>
          <li className="lg:px-16">
            <Link to={"#"}>{LogoSvg}</Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              وبلاگ
            </Link>
          </li>
          <li className={style.liLg}>
            <Link className={style.hoverLink} to={"#"}>
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="bg-[#fff] md:hidden block  shadow-custom  sticky top-0">
        <div className="w-full h-[90px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <a
                href="#"
                className="text-white font-bold text-xl mt-[15%] cursor-pointer block"
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

export default Navbar;
