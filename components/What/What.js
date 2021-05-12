import React, { useEffect } from "react";
import classes from "./What.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const What = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.what}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h3>TECHSTACK</h3>
          <h1>What I work with</h1>
          <p>
            These are the skills i feel most confident with in my coding. I am
            open for new experiences and learning new stacks, and everything
            that comes with it.
          </p>
        </div>
        <div data-aos="fade-up" className={classes.icons}>
          <div>
            {" "}
            <img src="/html2.png" alt="picture of css logo" />
          </div>
          <div>
            {" "}
            <img src="/css2.png" alt="picture of css logo" />
          </div>
          <div>
            {" "}
            <img src="/javascript.png" alt="picture of javascript logo" />
          </div>
          <div>
            {" "}
            <img src="/react.png" alt="picture of react logo" />
          </div>
          <div>
            {" "}
            <img src="/git.png" alt="picture of git logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
