import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import SectionHeader from "../../components/shared/SectionHeader";
import contactUs from "../../../src/assets/contactUs.json";
import Lottie from "lottie-react";

const ContactPage: React.FC = () => {
  return (
    <div className="my-20">
      <Helmet>
        <title>Mecha Freak | Contact</title>
      </Helmet>
      <Container>
        <SectionHeader title="Contact Us" description=" " />

        <div className="md:flex md:items-center md:justify-center my-6">
          <div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-2xl text-blue-800" />
              <h2 className="text-xl font-semibold">sample@mecha-freak.com</h2>
            </div>

            <div className="flex items-end">
              <IoLocationSharp className="text-3xl text-blue-800" />
              <h2 className="text-xl font-semibold">Dhaka, Bangladesh</h2>
            </div>
            <h2 className="font-semibold">Chankharfoolz Tower Kayettuly</h2>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl text-blue-800" />
              <h2 className="font-semibold">Phone: 01789512433</h2>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Lottie animationData={contactUs}></Lottie>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-center text-xl mb-2 mt-6">
            Where we are{" "}
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.755712739856!2d90.39967717389145!3d23.720416189929487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a478309f91%3A0x3d50bcd3f693fb85!2sKayettuly%20water%20atm%20booth!5e0!3m2!1sen!2sbd!4v1727788439957!5m2!1sen!2sbd"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
