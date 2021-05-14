import React from "react";
import Contact from "../../components/Contact/ContactForm";
import classes from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={classes.pages}>
      <Contact />
    </div>
  );
};

export default index;
