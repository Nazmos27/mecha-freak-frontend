import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../../components/Container";
import SectionHeader from "../../components/shared/SectionHeader";

const brandInfo: string[] = [
  "https://i.ibb.co.com/cQm8qRF/eyooso-Logo.jpg",
  "https://i.ibb.co.com/3p2xxZJ/risophy-Logo.jpg",
  "https://i.ibb.co.com/0smp1hD/nexkey-Logo.png",
  "https://i.ibb.co.com/gV6Zk0F/meletrix-Logo.jpg",
  "https://i.ibb.co.com/TBftKYZ/keychron-Logo.webp",
  "https://i.ibb.co.com/TqMHnwx/rklogo.png",
  "https://i.ibb.co.com/MMGWr0Y/Og-Img-Default.png"
];
//todo :change the image url here

const BrandSection: React.FC = () => {
  return (
    <div className="my-12">
      <Container>
        <SectionHeader
          title="Top Featured Brands"
          description=""
        />
      </Container>
      <div className="my-6">
        <Marquee>
          {brandInfo.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt="logo" className="grayscale md:h-32 md:w-44 h-20 w-32 ml-4" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandSection;
