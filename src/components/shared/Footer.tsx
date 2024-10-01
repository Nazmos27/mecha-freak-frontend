import React from "react";
// import logo from "../../assets/logo.svg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-blue-950 text-primary-content p-10">
      <aside>
        <img src="afdaf" alt="logo" className="size-20" />
        <p className="font-bold">
          Mecha Freak
          <br />
          Providing top brand's mechanical keyboard since 2024
        </p>
        <p>
          {" "}
          All right reserved to <b>Md. Nazmos Sakib</b>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/profile.php?id=100008488000660">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/nsakib27/">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://x.com">
            <FaSquareXTwitter className="text-3xl" />
          </a>
          <a href="https://github.com/Nazmos27">
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
