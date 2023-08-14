import React from "react";
import Image from "next/image";
import FirstCard from "./firstCard";
import SecondCard from "./secondCard";
import styles from "../../../styles/CustomerConnect.module.css";

const customerConnect = ({ openModal }) => {
  return (
    <div className={styles.connectContainer}>
      <h1>ABOUT US</h1>
      <FirstCard open={openModal} />
      <SecondCard />
    </div>
  );
};

export default customerConnect;
