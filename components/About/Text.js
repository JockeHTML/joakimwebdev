import React, { useEffect } from "react";
import classes from "./Text.module.css";
import Button from "../Welcome/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-left" className={classes.text}>
      <div className={classes.content}>
        <h3>A BIT</h3>
        <h1>About Me</h1>
        <p>
          I am a self taught web developer, focusing on front-end side. In 2020
          i decided to leave my current job and pursue a career in coding. I
          have always had an interest for technology and computers so it felt
          natural to try get into the IT business.
        </p>
        <br />
        <p>
          At this point Im trying to get into freelanceing and doing as much
          work as i can, mainly to small businesses. Im trying to learn as much
          as I can while working, and picking up new things and add them to my
          stack along the way.
        </p>
        <Button>Contact me</Button>
      </div>
    </div>
  );
};

export default Text;
