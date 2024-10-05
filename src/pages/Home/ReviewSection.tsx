import "swiper/css";
import "swiper/css/pagination";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/shared/SectionHeader";
import { useGetAllReviewQuery } from "../../redux/api/reviewsApi";
import ReviewSwipper from "./ReviewSwipper";





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
        <ReviewSwipper  data={data}/>
      </div>
    </div>
  );
};

export default ReviewSection;
