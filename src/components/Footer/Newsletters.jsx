
const Newsletters = () => {
  return (
    <div className="felx flex flex-col space-y-6 px-5 py-5">
    <h1
      className=" tracking-[-0.684px]; whitespace-nowrap text-right font-IRANYekanWeb text-[19px] font-extrabold not-italic leading-[normal] text-white
"
    >
      از جدیدترین کالاها باخبر شوید
    </h1>
    <div className="relative min-w-[300px] rounded-[9px] bg-[#29313A]  py-6">
      <input
        type="text"
        placeholder="شماره تماس خود را وارد کنید ..."
        className="placeholder: absolute inset-0 overflow-visible bg-transparent p-3  text-white outline-none placeholder:p-3 placeholder:text-[14px] placeholder:font-[400] placeholder:text-[rgba(255,255,255,0.41)]"
      />
      <button className="absolute bottom-1 left-1 rounded-[9px] bg-main-green p-1 px-5 py-2 text-white ">
        ثبت
      </button>
    </div>
    <div className="flex  ">
      <img
        src="/namad.png"
        className="mx-4 h-32 rounded-[9px] bg-white"
        alt=""
      />
      <img
        src="/namad2.png"
        alt=""
        className="h-32 rounded-[9px] bg-white"
      />
    </div>
  </div>  )
}

export default Newsletters