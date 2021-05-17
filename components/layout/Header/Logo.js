import React from "react";
import classes from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <a>
          <Image
            src="/logo2.png"
            alt="Joakimwebdev logo"
            width="200"
            height="200"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
