import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import SkillsItems from "./SkillsItems";
import "./Skills.scss";

// ***** add a slider for skills
const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Checkout my <span>Skills</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {SkillsItems.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
