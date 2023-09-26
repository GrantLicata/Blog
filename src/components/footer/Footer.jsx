import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.desc}>©2023 Grant Licata, All rights reserved.</p>
    </div>
  );
};

export default Footer;
