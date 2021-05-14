import React from "react";
import Projects from "../../components/Projects/Projects";
import classes from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={classes.pages}>
      <Projects />
    </div>
  );
};

export default index;
