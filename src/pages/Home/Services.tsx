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
const OurService: React.FC = () => {
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
        <div className=" bg-blue-100 py-10 px-6 my-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="bg-blue-500 text-white px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-600 py-3 rounded text-center">
              <h3 className="text-4xl font-bold">
                {" "}
                <CountUp
                  end={1000}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                />
                +
              </h3>
              <h3 className="text-xl my-2">Best Mechanical Keyboard</h3>
            </div>
            <div className="bg-blue-500 text-white px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-600 py-3 rounded text-center">
              <h3 className="text-4xl font-bold">
                <CountUp end={10} enableScrollSpy={true} scrollSpyDelay={100} />
                k+
              </h3>
              <h3 className="text-xl my-2">Satisfied customer</h3>
            </div>
            <div className="bg-blue-500 text-white px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-600 py-3 rounded text-center">
              <h3 className="text-4xl font-bold">
                {" "}
                <CountUp
                  end={24}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                />{" "}
                Hour
              </h3>
              <h3 className="text-xl my-2">Fastest delivery</h3>
            </div>
            <div className="bg-blue-500 text-white px-5 hover:scale-110 transition-all duration-300 hover:bg-blue-600 py-3 rounded text-center">
              <h3 className="text-4xl font-bold">Best</h3>
              <h3 className="text-xl my-2">Price rate</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <AiFillSafetyCertificate className="inline mr-2 text-blue-600 text-5xl" />{" "}
              Best Quality
            </h3>
            <p className="ml-16 font-semibold text-slate-500 text-justify">
              Explore a curated collection of toy cars, handpicked for their
              exceptional quality, attention to detail, and authenticity.
              We&apos;re committed to providing you with the very best in toy
              car craftsmanship.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <IoIosPricetags className="inline mr-2 text-blue-600 text-5xl" />{" "}
              Best Pricing
            </h3>
            <p className="ml-16 text-justify font-semibold text-slate-500">
              Discover unbeatable deals and competitive pricing on a wide range
              of toy cars. We offer budget-friendly options without compromising
              on quality, making collecting and enjoying toy cars more
              affordable.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <RiCustomerService2Fill className="inline mr-2 text-blue-600 text-5xl" />{" "}
              24-Hour Support
            </h3>
            <p className="ml-16 font-semibold text-slate-500">
              Have a question or need assistance at any time? Our dedicated
              support team is here to help 24/7. Your satisfaction is our
              priority, and we&apos;re just a message or call away.
            </p>
          </div>
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <TbTruckDelivery className="inline mr-2 text-blue-600 text-5xl" />{" "}
              Fastest Delivery
            </h3>
            <p className="ml-16 text-justify font-semibold text-slate-500">
              Get your toy cars quickly and efficiently with our express
              delivery service. We understand that you&apos;re excited to
              receive your new additions, so we ensure the fastest delivery to
              your doorstep.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <GoSmiley className="inline mr-2 text-blue-600 text-5xl" />{" "}
              Satisfied Customer
            </h3>
            <p className="ml-16 text-justify font-semibold text-slate-500">
              Our track record speaks for itself. Join a community of satisfied
              customers who have enjoyed exceptional service, quality products,
              and memorable experiences with their toy car purchases.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-slate-700">
              <GiMultipleTargets className="inline mr-2 text-blue-600 text-5xl" />{" "}
              Unique Featured Toys
            </h3>
            <p className="ml-16 text-justify font-semibold text-slate-500">
              Discover a world of one-of-a-kind, unique, and collectible toy
              cars that you won&apos;t find anywhere else. Our marketplace
              showcases extraordinary pieces that are sure to stand out in your
              collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
