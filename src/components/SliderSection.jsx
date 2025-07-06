import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderSection() {
  const slides = [
    {
      img: "https://www.astrologerpoojabhatia.com/images/slider/mee-soul.jpg",
      text: "When will you meet your soul mate?",
    },
    {
      img: "https://www.astrologerpoojabhatia.com/images/slider/facingproblem.jpg",
      text: "Are you facing problems in your life?",
    },
    {
      img: "https://www.astrologerpoojabhatia.com/images/slider/slider2.jpg",
      text: "Job or business?",
    },
    {
      img: "https://www.astrologerpoojabhatia.com/images/slider/slider3.jpg",
      text: "When will your partner come back?",
    },
    {
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_10/3256166/200304-tarot-cards-2x1-al-1425.jpg",
      text: "Unlock Your Future with Tarot Readings",
    },
  ];

  return (
    <div className="w-full relative h-[70vh] z-10 border-2 border-white bg-white md:h-[70vh] sm:h-[40vh] max-sm:h-[30vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex justify-center items-center">
            <img
              src={slide.img}
              alt={slide.text}
              className="block w-full h-full object-cover"
            />
            <h4 className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl font-medium max-sm:hidden">
              {slide.text}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
