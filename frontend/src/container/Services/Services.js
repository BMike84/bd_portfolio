import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      title: "Shopify Store Setup",
      description:
        "A Shopify store is a great way to expand your business. Let's work together to build your store and expand your customer reach.",
      img: images.shopifyStore,
      class: "shopify",
    },
    {
      title: "Store Migrations",
      description:
        "Have a store already and looking to switch to Shopify? I can help with your migration of data, content, and training if you're new to Shopify.",
      img: images.migrations,
      class: "shopify",
    },
    {
      title: "React Websites",
      description:
        "Want to build a website using React? I can help you with that.",
      img: images.webDesign,
      class: "front-back",
    },
  ];
  return (
    <div className="app__services">
      <h2 className="head-text">
        Checkout my <span>Services</span>
        <br />
        Shopify & <span>React</span>
      </h2>
      <div className="app__profiles">
        {services.map((about, index) => (
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
  MotionWrap(Services, "app__services"),
  "services",
  "app__primarybg"
);
