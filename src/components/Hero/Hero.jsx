import MainBackground from "./MainBackground"
import MainnTitles from "./MainTitles"

const Hero = () => {
  return (
    <div className=" w-full  mx-auto  flex justify-between bg-red-400 ">
        <div>
         <MainnTitles/>
        </div>
        <div>
          <div className="">
            <img className="object-cover" src="/public/cards/news/backGround.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero