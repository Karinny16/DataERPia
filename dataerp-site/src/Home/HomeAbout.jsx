// import { useState } from "react"
import "./HomeAbout.css";
import { motion } from "framer-motion";

function HomeAbout() {
  return (
    <>
      <motion.div
        className="Container5"
        initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth, transition:{duration:0.4}}}
      ></motion.div>
    </>
  );
}

export default HomeAbout;
