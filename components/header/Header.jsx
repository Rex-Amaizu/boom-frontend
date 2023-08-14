import React from "react";
import NavBar from "../layouts/Navbar";
import HeaderTemplate from "./HeaderTemplate";
import styles from "../../styles/Header.module.css";

const header = ({ openModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxDiv}></div>
      <div className={styles.navDiv}>
        <NavBar open={openModal} />
      </div>
      <HeaderTemplate open={openModal} />
    </div>
  );
};

export default header;
