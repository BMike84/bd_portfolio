import React, { useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceData from "./ServiceData";
import "./Services.scss";

const Services = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div className="app__services" ref={ref}>
      <h2 className="head-text">
        Checkout my <span>Services</span>
        <br />
        Shopify & <span>React</span>
      </h2>
      <div className="app__profiles">
        {ServiceData.map((about, index) => (
          <motion.div
            ref={ref}
            // whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.5, type: "spring" }}
            className="app__profile-item"
            key={about.title + index}
            animate={animation}
          >
            <img src={about.img} alt="about.title" />
            <h2 className={`bold-text ${about.class}`}>{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__primarybg"
);
