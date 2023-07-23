import SocialMedia from "./SocialMedia";
import ArrowIconLeft from "./../CardSldierAndContents/ArrowIconLeft";
import GroupingFooter from "./GroupingFooter";
import Guide from "./Guide";
import ContactUs from "./ContactUs";
import Newsletters from "./Newsletters";
const Footer = () => {
  return (
    <>
      <div className="h-full w-full bg-[#1D2228]">
        <div className="mx-auto grid max-w-[1201px] grid-cols-1 place-content-center place-items-center px-5 py-10 md:grid-cols-2 xl:grid-cols-5">
          <SocialMedia />
          <GroupingFooter />
          <Guide />
          <ContactUs />
  <Newsletters/>
        </div>
      </div>
      <div className="flex w-full bg-[#29313A]">
        <div className="mx-auto flex items-start flex-col md:flex-row space-y-4 md:space-y-0 h-full max-w-[1201px] p-2">
          <div className=" whitespace-pre-wrap lg:whitespace-nowrap  font-IRANYekanWeb text-white text-center md:text-right text-[13px] not-italic font-normal leading-[normal] tracking-[-0.468px];
">
            کلیه حقوق این وب‌سایت به <span className="font-[1000] text-[14px] "> شرکت پاک نیرو البرز</span> تعلق دارد
            و هرگونه کپی برداری ممنوع بوده و پیگرد قانونی دارد.
          </div>
          <div className="flex flex-row-reverse justify-center md:justify-stretch w-full">
            <span className=" text-white flex justify-center text-right text-[13px] not-italic font-extrabold leading-[normal] tracking-[-0.468px];
">
            اجراء و پیاده سازی : شرکت هایپونت
            </span>
            <span className="mx-4 hidden md:block"><svg xmlns="http://www.w3.org/2000/svg" width="2" height="30" viewBox="0 0 2 30" fill="none">
  <path d="M1 0V30" stroke="white" stroke-opacity="0.27"/>
</svg></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
