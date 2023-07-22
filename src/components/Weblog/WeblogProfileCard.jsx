import { callIcon, teltegramIcon } from "../../assets/svg/svg";
import style from "../../styles/SliderAndCards.module.css";

const WeblogProfileCard = ({item}) => {
  return (
    <div className="mt-[17px] flex items-baseline justify-between mx-2">
    <div className="ml-2 flex w-full justify-between items-baseline">
      <div className="flex">
        <div className="">
          <img className="rounded-xl w-[60px] h-[60px]" src={item?.user_info.picture} alt="" />
        </div>
        <div className="mx-2 flex flex-col">
          <h2 className={`${style.userTitle}`}>{item?.user_info.name}</h2>
          <h5 className={`${style.userExperience} flex flex-col mt-3
          `}>
            {item?.user_info.activity}
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

export default WeblogProfileCard
