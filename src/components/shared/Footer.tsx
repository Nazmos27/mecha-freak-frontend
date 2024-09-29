import React from "react";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-blue-950 text-primary-content p-10">
      <aside>
        <img src={logo} alt="logo" className="size-20" />
        <p className="font-bold">
          Key Haven Ltd.
          <br />
          Providing reliable mechanical keyboard since 2024
        </p>
        <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/nurullahbhuiyan91/">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/nurullahbhuiyan91/">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://x.com/BMNurullah">
            <FaSquareXTwitter className="text-3xl" />
          </a>
          <a href="https://github.com/nurullah91/">
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
