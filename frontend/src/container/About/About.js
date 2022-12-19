import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Frontend Developer",
      description:
        "I specialize in front-end development. React.js is where I spend most of my time.",
      img: images.frontEnd,
      class: "front-back",
    },
    {
      title: "Shopify Developer",
      description:
        "I specialize in making Shopify stores. It can be rather from scratch or migrating your existing store from another platform to Shopify.",
      img: images.shopifyStore,
      class: "shopify",
    },
    {
      title: "Backend Developer",
      description: "I am good at backend development.",
      img: images.backEnd,
      class: "front-back",
    },
  ];
  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know That <span>Good Dev</span>
        <br />
        Means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
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
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
