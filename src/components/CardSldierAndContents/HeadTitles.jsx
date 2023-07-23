import style from "../../styles/SliderAndCards.module.css";

const HeadTitles = ({ title, smallTitle }) => {
  return (
    <div className="">
      <h4 className={`font-IRANYekanWeb text-main-green ${style.h4}`}>
        {smallTitle}
      </h4>
      <h1 className={`${style.h1} px-2 lg:px-0`}>{title}</h1>
    </div>
  );
};

export default HeadTitles;
