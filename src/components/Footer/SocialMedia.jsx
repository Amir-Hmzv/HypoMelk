import { LogoSvgWhite } from "../../assets/svg/svg";
import {
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaWikipediaW,
  } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div>
    <div className="flex flex-col w-full justify-center text-center space-y-6 py-5 md:py-0 ">
      <div className="flex justify-center">{LogoSvgWhite}</div>
      <div
        className="  leading-[165.409%]; text-center lg:text-right text-[11px] font-normal not-italic text-[rgba(255,255,255,0.44)]
"
      >
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
        متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
      </div>
      <div className="mr-2 flex justify-center lg:justify-stretch  ">
        <span className="mx-2">
          <FaTwitter className="cursor-pointer text-2xl text-white transition-[color] duration-200 ease-linear hover:text-main-green" />
        </span>
        <span className="mx-2">
          <FaInstagram className="cursor-pointer text-2xl text-white transition-[color] duration-200 ease-linear hover:text-main-green" />
        </span>
        <span className="mx-2">
          <FaFacebook className="cursor-pointer text-2xl text-white transition-[color] duration-200 ease-linear hover:text-main-green" />
        </span>
        <span className="mx-2">
          <FaWikipediaW className="cursor-pointer text-2xl text-white transition-[color] duration-200 ease-linear hover:text-main-green" />
        </span>
      </div>
    </div>
  </div>  )
}

export default SocialMedia