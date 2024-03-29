//change map items to be react.js Shopify sass

import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opactity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Michael</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Shopify Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          src={images.hero}
          alt="profile_bg"
          className="app__header-img_hero"
        />
        <motion.img
          whileInView={{ scale: [0, 1.1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.shopify, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>

    // <div className="app__header app__flex">
    //   <motion.div
    //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //     transition={{ duration: 1 }}
    //     className="app__header-info"
    //   >
    //     <div className="app__header-badge">
    //       <div className="badge-cmp app__flex">
    //         <div style={{ marginLeft: 20 }}>
    //           <p className="p-text">Hello, I am</p>
    //           <h1 className="head-text">Michael</h1>
    //         </div>
    //       </div>

    //       <div className="tag-cmp app__flex">
    //         <p className="p-text">Web Developer</p>
    //         <p className="p-text">Shopify Developer</p>
    //         <p className="p-text">Freelancer</p>
    //       </div>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     whileInView={{ opacity: [0, 1] }}
    //     transition={{ duration: 0.5, delayChildren: 0.5 }}
    //     className="app__header-img"
    //   >
    //     <img
    //       src={images.hero}
    //       alt="profile_bg"
    //       className="app__header-img_hero"
    //     />
    //     <motion.img
    //       whileInView={{ scale: [0, 1.1] }}
    //       transition={{ duration: 1, ease: "easeInOut" }}
    //       src={images.circle}
    //       alt="profile_circle"
    //       className="overlay_circle"
    //     />
    //   </motion.div>

    //   <motion.div
    //     variants={scaleVariants}
    //     whileInView={scaleVariants.whileInView}
    //     className="app__header-circles"
    //   >
    //     {[images.shopify, images.react, images.sass].map((circle, index) => (
    //       <div className="circle-cmp app__flex" key={`circle-${index}`}>
    //         <img src={circle} alt="circle" />
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>
  );
};

export default AppWrap(Header, "home");
