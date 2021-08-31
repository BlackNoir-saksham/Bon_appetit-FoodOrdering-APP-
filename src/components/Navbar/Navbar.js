import React, { useState } from "react";
import "./Navbar.css";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { CgMenuHotdog } from "react-icons/cg";

function Navbar() {
  const [showMediaIcons, setshowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>
            <span className="b">𝕭</span>σɳ α<span className="pp">ρρ</span>ҽƚιƚ
          </h1>
        </div>

        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://github.com/BlackNoir-saksham" target="_blank">
                <GrGithub className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saksham-srivastava-68a3bb1ba/"
                target="_blank"
              >
                <ImLinkedin className="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <GrInstagram className="insta" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Saksham69216568" target="_blank">
                <FaTwitter className="twitter" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
              <CgMenuHotdog />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
