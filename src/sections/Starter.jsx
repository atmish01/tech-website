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
// import ParticlesBackground from "./ParticlesBackground";


export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
    {/* <ParticlesBackground> */}
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h2>Welcome to</h2>
          <h1>Techweek</h1>
          <h2>IEEE DTU!</h2>
          <p>
          TECHWEEK is the annual workshop galore organised by IEEE DTU which offers budding engineers an insight into the various new and upcoming technologies. 
          </p>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              color="pink"
              content="Join Us!"
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
    {/* </ParticlesBackground> */}
    </div>
  );
}
