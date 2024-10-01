import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionHeader from "../../components/shared/SectionHeader";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mecha Freak | About</title>
      </Helmet>
      <Container>
        <div>
          <SectionHeader title="About Us" description=" " />
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Company Story:{" "}
            </h2>
            <p className="mb-3">
            At Mecha Freak, our journey began with a deep passion for mechanical keyboards and a commitment to building a community for fellow enthusiasts. Founded by <b>Md Nazmos Sakib</b> in 2024, we set out with a clear and ambitious mission: to select and offer the highest-quality mechanical keyboards, combining innovative technology with exceptional craftsmanship.
            </p>
            <p className="mb-3">
            Starting from modest roots, we've evolved into a go-to destination for keyboard enthusiasts across the globe. Our unwavering focus on quality, innovation, and customer satisfaction drives every choice we make, ensuring that each product embodies our dedication to excellence.
            </p>
            <p className="mb-3">
              Join us as we continue to evolve, innovate, and inspire the
              keyboard community, one keystroke at a time.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-blue-500">
              Our Mission and Vision:{" "}
            </h2>
            <p className="mb-3">
              <span className="text-xl font-bold mr-2">Mission: </span> Our
              mission at Mecha Freak is to empower enthusiasts with exceptional
              mechanical keyboards that enhance their computing experience. We
              strive to offer a diverse selection of premium products coupled
              with outstanding customer service, ensuring every interaction is a
              delightful experience.
            </p>
            <p className="mb-3">
              <span className="text-xl font-bold mr-2">Vision: </span>
Our goal is to be at the forefront of innovation and customer satisfaction in the industry. We imagine a future where every keyboard enthusiast discovers their ideal match, backed by a community-focused platform that promotes creativity, collaboration, and ongoing improvement.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
