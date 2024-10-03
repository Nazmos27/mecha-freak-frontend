import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./reviewStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TReview } from "../../redux/api/reviewsApi";
import { Rating } from "@smastrom/react-rating";

const ReviewSwipper = ({ data }) => {
  console.log("data", data.data);
  return (
    <div className="w-full relative bg-[url('https://hhkeyboard.us/-/media/project/hhkeyboard/blog/2023/03/mechanical_keyboard_plates_blog_1440w.jpg')] bg-cover bg-center p-10 border-green-400 border-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-transparent"
      >
        {data?.data.map((item: TReview) => (
          <SwiperSlide className="bg-transparent">
            <div className="text-white bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 md:h-42 md:gap-2 md:p-4 md:w-2/3 rounded-md flex flex-col items-start">
              <div className="flex justify-between w-full text-sm">
                
                  <Rating
                    readOnly
                    value={item.rating}
                    style={{ maxWidth: 80 }}
                  />
                
                <p className="mr-2">{new Date(item.createdAt).toLocaleDateString("en-GB")}</p>
              </div>
              <div>
                <p className="text-xl text-left">{item.review}</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col justify-start">
                  <h1 className="">{item.name}</h1>
                  <p className="text-left text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ReviewSwipper;
