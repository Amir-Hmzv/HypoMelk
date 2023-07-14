import { callIcon, teltegramIcon } from "../../assets/svg/svg";
import style from "../../styles/NewsHouses.module.css";

const ProflieCard = ({item}) => {
  return (
    <div className="mt-[17px] flex items-baseline justify-between">
    <div className="ml-2 flex w-full justify-between">
      <div className="flex">
        <div>
          <img className="rounded-lg" src={item?.profile} alt="" />
        </div>
        <div className="mx-2 flex flex-col">
          <h2 className={`${style.userTitle}`}>{item?.userName}</h2>
          <h5 className={`${style.userExperience}`}>
            {" "}
            {item?.experience}
          </h5>
        </div>
      </div>
      <div className="flex ">
        <div className="mx-1 rounded-xl border border-orange-400 bg-orange-200 p-2">
          <span className="relative z-10 opacity-100">
            {teltegramIcon}
          </span>
        </div>
        <div className="mx-1 rounded-xl border border-green-400 bg-green-200 p-2">
          <span className="relative z-10 opacity-100">{callIcon}</span>
        </div>
      </div>
    </div>
  </div>  )
}

export default ProflieCard