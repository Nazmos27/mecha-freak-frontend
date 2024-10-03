// Icons
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { GiMultipleTargets } from "react-icons/gi";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import CountUp from "react-countup";
import SectionHeader from "../../components/shared/SectionHeader";
const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="my-12">
      <SectionHeader
        title="Our service"
        description="We are providing top-notch mechanical keyboards with free shipping, 24/7 customer support, and the best prices guaranteed. Enjoy a seamless shopping experience with us."
      />
      <div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
            <img src="./serviceIcons/high-quality.gif" className="h-20 w-20 rounded-full" alt="" />
            <h3 className=" my-2">
              Ensuring top-tier quality in every product, every time. Your
              satisfaction, our commitment!
            </h3>
          </div>
          <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
            <img src="./serviceIcons/best-price.gif" className="h-20 w-20 rounded-full" alt="" />
            <h3 className=" my-2">Delivering the best products at unbeatable prices. Quality meets value, just for you!</h3>
          </div>
          <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
          <img src="./serviceIcons/free-delivery.gif" className="h-20 w-20 rounded-full" alt="" />
            <h3 className=" my-2">Fast, reliable, and always free delivery. Bringing convenience to your doorstep!</h3>
          </div>
          <div className="border-2 px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-100 py-3 rounded text-center flex flex-col items-center">
          <img src="./serviceIcons/support.gif" className="h-20 w-20 rounded-full" alt="" />
            <h3 className=" my-2">Our support never sleeps! Here for you, anytime, every day. We are always ready to help!</h3>
          </div>
        </div>
      </div>

      <div data-aos="fade-up"></div>
    </div>
  );
};

export default Services;
