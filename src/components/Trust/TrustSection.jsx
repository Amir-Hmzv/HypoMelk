import {
  fluctuation,
  trustBuildingIcon,
  trustRateIcon,
} from "../../assets/svg/svg";
import { HeadTitles } from "../CardSldierAndContents";
import TrustContent from "./TrustContent";
const TrustSection = () => {
  return (
    <div className="mx-auto mt-[95px] max-w-[1201px]">
      <HeadTitles
        smallTitle={"ارزش های ما"}
        title={"چرا باید به ما اعتماد کنید"}
      />
      
      <div   className=" px-8 lg:px-0  lg:space-y-0 space-y-10 mt-[80px] grid   grid-cols-1 place-content-center place-items-baseline md:grid-cols-2 lg:grid-cols-3">
        <TrustContent
          icon={trustRateIcon}
          title={`ملک های با ارزش`}
          desc={
            "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند."
          }
        />
        <TrustContent
          icon={trustBuildingIcon}
          title={`بهترین قیمت در بازار`}
          desc={
            "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند."
          }
        />
        <TrustContent
          icon={fluctuation}
          title={`نداشتن نوسانات قیمت`}
          desc={
            "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند."
          }
        />
      </div>
      </div>
  );
};

export default TrustSection;
