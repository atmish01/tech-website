import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element} id ="contact">
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <br/>
            <br/>
              <div className="form">
                <div className="detail-name">Fill the form to know more about us.</div>
                  <a href="#" target = "_blank">Click here</a>
              </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
            >

            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                <a href="tel:9111827121" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p class="call-button">9111827121</p></a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#"> DTU, Bawana Road, New Delhi</a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>This website was developed by:</h3>
            <div className="touch-section">
              <div className="icon">
              <AiFillLinkedin />
              </div>
              <div className="detail">
                <div className="detail-name">Arya Pandey</div>
                <div className="detail-content">
                  <a href="https://www.linkedin.com/in/arya-pandey-5340651b8/" target="_blank">Click here</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
              <AiFillLinkedin />
              </div>
              <div className="detail">
                <div className="detail-name">Shreya Sahu</div>
                <div className="detail-content">
                  <a href="https://www.linkedin.com/in/shreya-sahu-1463691bb/" target = "_blank">Click here</a>
                </div>
              </div>
            </div>

            {/* <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+91 7551231231</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#"> 32 StreetOne Boards, GJ 560123</a>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>©2022 IEEE – All rights reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
            <a href="https://www.facebook.com/ieeedtu/" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/ieee.dtu/?hl=en" target="_blank">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
            <a href="https://www.linkedin.com/company/ieee-dtu/mycompany/" target="_blank">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="https://twitter.com/dtu_ieee" target="_blank">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
