import { searchBox, searchButton } from "../assets/svg/svg";
import style from "../styles/HeroSection.module.css";
const HeroSection = ({ heroImage }) => {
  return (
    <main className="w-full  overflow-x-hidden  ">
      <div className="w-full lg:max-w-[1201px]  mx-auto ">
        <div
          className="grid grid-cols-1
         lg:grid-cols-2"
        >
          <div className="mt-[111px]">
            <h4 className={style.h4}>برترین مشاورین املاک خاورمیانه</h4>
            <h1 className={style.h1}>مشاورین املاک هوم لند</h1>
            <p className={style.titleDesc}>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
            </p>
            <div className=" xl:block flex justify-center mt-[39px] px-5 lg:px-0 relative ">
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
            <div className="w-full lg:block hidden      overflow-hidden  ">
              <img
                className="z-[10] top-[0] left-0 h-[90vh] bg-[50%_0] bg-no-repeat lg:max-w-[510px]  xl:max-w-[660px]	   2xl:max-w-[759px] overflow-x-hidden  object-fill    absolute  "
                src={heroImage[0]?.homePage_pic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
