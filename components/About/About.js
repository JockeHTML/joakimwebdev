import React from "react";
import Text from "./Text";
import Image from "./Image";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default About;
