import React from "react";
import NavBar from "../layouts/Navbar";
import HeaderTemplate from "./HeaderTemplate";
import styles from "../../styles/Header.module.css";

const header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxDiv}></div>
      <div className={styles.navDiv}>
        <NavBar />
      </div>
      <HeaderTemplate />
    </div>
  );
};

export default header;
