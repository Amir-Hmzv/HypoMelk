
const RepresentativeCard = ({item}) => {
    console.log(item);
  return (
<div className="flex justify-center w-full items-center pl-2">
<div className="relative  min-h-[360px] overflow-auto w-[302px] py-20 rounded-[36px] ease-linear duration-150 md:border-0 border-2  hover:border-2 bg-white">
    <div className="absolute left-[50%] top-[25%]  translate-x-[-50%] translate-y-[-50%] ">
      <div className="relative h-[150px] w-[150px] rounded-full bg-red-500">
        <div className="relative space-y-3 rounded-full flex flex-col  text-center items-center">
          <img
            src={item?.picture}
            className=" z-5 inset-0 rounded-full border-4 border-main-green"
            alt=""
          />
          <h4 className="my-1 text-center font-IRANYekanWeb  font-[700] leading-[145.609%] tracking-[-0.49px]">
          {item?.username}
          </h4>
          <span className="block text-center  font-IRANYekanWeb text-[10px] font-[500] leading-[145.609%] tracking-[-0.21px] text-[#8A8989]">
          {item.activity}
          </span>
          <p className="text-cente  relative w-[200px] font-IRANYekanWeb line-clamp-4 text-[11px] font-[400] leading-[151.209%] tracking-[-0.231px;] text-[#5E5F66]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار
            دارید به متن های برخورده اید که با نام لورم ایپسوم
            شناخته می‌شوند.
          </p>
<button className="bg-main-green p-2 text-white  text-[12px] font-IRANYekanWeb rounded-[5px] ">مشاهده ملک ها</button>
        </div>
      </div>
    </div>
  </div> 


</div> )
}

export default RepresentativeCard