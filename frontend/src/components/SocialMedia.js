import React from "react";

import { SiUpwork } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/BMike84" target="blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/michael-buffone-072a4723a/"
          target="blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.upwork.com/freelancers/~017b7de11424dccba0"
          target="blank"
        >
          <SiUpwork />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
