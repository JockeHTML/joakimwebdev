import React from "react";
import classes from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image src="/logo.png" alt="Joakimwebdev logo" width="200" height="200" />
    </div>
  );
};

export default Logo;
