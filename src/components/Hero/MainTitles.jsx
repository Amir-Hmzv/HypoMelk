import style from "../../styles/HeroSection.module.css";

const MainnTitles = () => {
  return (
    <>
      <div className=" z-30 relative ">
        <div className="">
        <h4 className={style.h4}>برترین مشاورین املاک خاورمیانه</h4>

        </div>
        <h1 className={style.h1}>مشاورین املاک هوم لند</h1>
        <p className={style.titleDesc}>
          اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
          های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
        </p>
      </div>
    </>
  );
};

export default MainnTitles;
