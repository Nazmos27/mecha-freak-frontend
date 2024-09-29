import React from "react";
import { Helmet } from "react-helmet-async";

import Container from "../../components/Container";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mecha Freak | Home</title>
      </Helmet>
      <Slider />
      <Container>
        <FeaturedProducts />
        <OurService />
        <Review />
      </Container>
      <TopBrands />
    </div>
  );
};

export default Home;
