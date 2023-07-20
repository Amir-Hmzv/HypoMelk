import { Swiper, SwiperSlide } from "swiper/react"


const Weblog = () => {
  return (
    <div className="mt-80">
        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        className="sp"
        >
            <SwiperSlide className="bg-blue-700 px-3">1</SwiperSlide>
            <SwiperSlide className="bg-blue-700 px-3">2</SwiperSlide>

            <SwiperSlide className="bg-blue-700 px-3">3</SwiperSlide>
            <SwiperSlide className="bg-blue-700 px-3">4</SwiperSlide>
            <SwiperSlide className="bg-blue-700 px-3">5</SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Weblog