import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About TechWeek" color="blue" />
          <p>
          TECHWEEK is the annual workshop galore organised by IEEE DTU which offers budding engineers an insight into the various new and upcoming technologies. Workshops organized during TECHWEEK introduce technologies to students and intent to stimulate their interest in cutting edge technologies of today. TECHWEEK is a true knowledge fair for all those who have in them a craving to learn, with workshops ranging from web-designing to robotics and embedded systems, from programming to 3-D animation.
          </p>
          <p>
          You don't need to be an IEEE DTU member to attend. Free for all!
          </p>
          <Button content="What is Techweek?" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Innovative Ideas"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planning"
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Communication"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="24 * 7 Support"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
