import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../../components/Container";
import SectionHeader from "../../components/shared/SectionHeader";

const brandInfo: string[] = [
  "image-3.png",
  "image-2.png",
  "image-1.png",
  "image.png",
  "image-5.png",
  "image-6.png",
  "image-4.png",
];
//todo :change the image url here

const BrandSection: React.FC = () => {
  return (
    <div className="my-12">
      <Container>
        <SectionHeader
          title="Top Featured Brands"
          description="Explore the leading brands known for their quality and innovation in the mechanical keyboard world. From established names to rising stars, find your favorite. Elevate your typing experience."
        />
      </Container>
      <div className="my-6">
        <Marquee>
          {brandInfo.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt="logo" className="grayscale" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandSection;
