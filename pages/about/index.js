import React from "react";
import About from "../../components/About/About";
import classes from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={classes.pages}>
      <About />
    </div>
  );
};

export default index;
