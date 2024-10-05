import React from "react";
import { Helmet } from "react-helmet-async";

import Container from "../../components/Container";
import FeaturedSection from "./FeaturedSection";
import Services from "./Services";
import ReviewSection from "./ReviewSection";
import BrandSection from "./BrandSection";
import WhyMecha from "./WhyMecha";
import Customization from "./Customization";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mecha Freak | Home</title>
      </Helmet>
      <img src="https://i.ibb.co.com/8XXv28j/mecha-Banner.webp" alt="" />
      <Container>
        <FeaturedSection />
        <Services/>
        <ReviewSection />
        <WhyMecha/>
        <Customization/>
      </Container>
      <BrandSection />
    </div>
  );
};

export default Home;
