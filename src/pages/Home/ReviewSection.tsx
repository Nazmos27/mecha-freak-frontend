// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import Loading from "../../components/Loading";
import { IoLocationSharp } from "react-icons/io5";
import SectionHeader from "../../components/shared/SectionHeader";
import { useGetAllReviewQuery } from "../../redux/api/reviewsApi";
import ReviewSwipper from "./reviewSwipper";


// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './reviewStyle.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ReviewSection = () => {
  const { data, isLoading } = useGetAllReviewQuery();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-12">
      <SectionHeader
        title={"Reviews from our valuable customers"}
        description=""
      />

      <div className=" my-6 border-2 min-h-[400px] flex">
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {data?.data?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="md:flex gap-6 lg:border-l-4 border-l-2 border-blue-500">
                <div className="flex flex-col justify-between bg-blue-900 p-10">
                  <div className="text-start">
                    <h1 className="text-9xl">❝</h1>
                    <h1 className="text-4xl mb-2 font-semibold">
                      {review.name}
                    </h1>
                    <div className="flex items-center justify-start gap-3">
                      <IoLocationSharp /> {review.location}
                    </div>
                  </div>

                  <p className=" w-3/4 text-justify mt-4">{review.review}</p>

                  <div className="flex gap-2 items-end">
                    <h1 className="text-xl text-slate-100">Ratings: </h1>
                    <h1 className="mt-6">
                      {" "}
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={review.rating}
                        readOnly
                      />
                    </h1>
                  </div>
                </div>
                <div className="w-[425px] h-[475px]">
                  <img className="w-full" src={review.image} alt="Guest" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <ReviewSwipper  data={data}/>
      
      </div>
    </div>
  );
};

export default ReviewSection;
