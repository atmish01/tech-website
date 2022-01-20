import React from "react";
import Timeline from "./sections/Timeline";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
// import Particles from "react-particles-js";


function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Starter />
      <About />
      <Timeline />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;