import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/ieee.png";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
          Welcome to IEEE Techweek DTU!
          </h1>
          <p>
          TECHWEEK is the annual workshop galore organised by IEEE DTU which offers budding engineers an insight into the various new and upcoming technologies. 
          </p>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              color="pink"
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={WorkImage} alt="Work Image" />
        </motion.div>
      </div>
    </div>
  );
}
