import React from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";
import styles from "../../styles/Footer.module.css";

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.mainFooterBody}>
        <div className={styles.logoRow}>
          <Image src={LogoImg} alt="logo" />
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <h4>All rights reserved.</h4>
        </div>
        <div className={styles.landingsRow}>
          <label>Landings</label>
          <div className={styles.landingsRowDiv}>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
        <div className={styles.landingsRow}>
          <label>Company</label>
          <div className={styles.landingsRowDiv}>
            <p>Home</p>
            <p>Career</p>
            <p>Services</p>
          </div>
        </div>
        <div className={styles.landingsRow}>
          <label>Resources</label>
          <div className={styles.landingsRowDiv}>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
