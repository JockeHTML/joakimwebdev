import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <a>
          <img src="/logo2.png" alt="Joakimwebdev logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
