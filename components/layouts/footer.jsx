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
            Boom Trade is a digital currency trading platform that uses
            high-frequency trading and algorithms to automatically buy digital
            currencies at low prices and sell them at higher prices to generate
            returns.
          </p>
          <h4>All rights reserved.</h4>
        </div>
        <div className={styles.secondFooterDiv}>
          <div className={styles.landingsRow}>
            <label>Company</label>
            <div className={styles.landingsRowDiv}>
              <p>Home</p>
              <p>About Us</p>
              <p>How It Works</p>
              <p>Investment Plan</p>
            </div>
          </div>
          <div className={styles.landingsRow}>
            <label>Useful Links</label>
            <div className={styles.landingsRowDiv}>
              <p>FAQ</p>
              <p>Contact Us</p>
              <p>Services</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.landingsRow}>
          <label>Resources</label>
          <div className={styles.landingsRowDiv}>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default footer;
