import React from "react";
import { Helmet } from "react-helmet-async";

import Container from "../../components/Container";
import FeaturedSection from "./FeaturedSection";
import Services from "./Services";
import ReviewSection from "./ReviewSection";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mecha Freak | Home</title>
      </Helmet>
      <img src="/mechaBanner.png" alt="" />
      <Container>
        <FeaturedSection />
        <Services/>
        <ReviewSection />
      </Container>
      <TopBrands />
    </div>
  );
};

export default Home;
