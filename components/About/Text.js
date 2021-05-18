import React, { useEffect } from "react";
import classes from "./Text.module.css";
import Button from "../Welcome/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className={classes.text}>
      <div className={classes.content}>
        <h3>A BIT</h3>
        <h1>About me</h1>
        <p>
          In 2020 I decided to leave my current job and pursue a career in
          coding. I have always had an interest for technology and computers so
          it felt natural to try take the step into programming world.
        </p>
        <br />
        <p>
          At this point Im starting to get into freelancing and doing as much
          work as i can, mainly to small businesses. I am learning as much as I
          can while working, and picking up new things and add them to my stack
          along the way.
        </p>
        <Link passHref href="/contact">
          <a>
            <Button>Contact me</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Text;
