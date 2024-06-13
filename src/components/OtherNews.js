import { newsData } from "@/services/service";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const OtherNews = () => {
  return (
    <div>
      <div>
      <Swiper
          
            spaceBetween={24}
            slidesPerView={2}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
        {newsData?.slice(0, 3)?.map((items) => (
         
            <SwiperSlide   key={items.id}>
              <Image src={items?.image} width={648} height={415} alt="" />
              <h1 className="text-[22px] font-medium mt-5">{items?.title}</h1>
              <div className="flex gap-2 mt-[18px]">
                <h1 className="text-xl">{items?.time}</h1>
                <li className="text-xl">{items?.date}</li>
              </div>
            </SwiperSlide>
      
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OtherNews;
